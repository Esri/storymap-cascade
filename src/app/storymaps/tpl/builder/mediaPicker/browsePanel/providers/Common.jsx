import React from 'react';

import constants from '../../constants';

import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import BreadcrumbModel from '../breadcrumbs/BreadcrumbModel';
import AGOLHeader from '../breadcrumbs/AGOLHeader';

import Gallery from '../gallery/Gallery';

import {} from 'lib-build/less!../sidePanel/SidePanel';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';
var text = i18n.builder.mediaPicker.browsePanel.providers;

class CommonProvider extends React.Component {
  constructor(props) {
    super(props);

    this.onKeyPress = this.onKeyPress.bind(this);
    this.fetchAlbums = this.fetchAlbums.bind(this);
    this.onAlbumClicked = this.onAlbumClicked.bind(this);
    this.determineGalleryItems = this.determineGalleryItems.bind(this);
    this.getBreadcrumbs = this.getBreadcrumbs.bind(this);
    this.onBreadcrumbClicked = this.onBreadcrumbClicked.bind(this);
  }

  onKeyPress(event) {
    if (event.charCode === 13) {
      this.fetchAlbums();
    }
  }

  fetchAlbums(name) {
    // we want this to be static so when username search returns it will  be the same value..
    var userName = name || this.props.searchValue || this.props.containerState.searchValue;

    this.beforeAlbumFetched();
    if (!userName) {
      this.props.updateAlbumFetchStatus({
        fetchStatus: constants.fetchStatus.ERROR
      });
      return;
    }
    userName = userName.trim();
    this.props.connector.getProviderAlbums(userName).then(results => {
      this.onAlbumSuccess(userName, results);
    }).catch(error => {
      console.warn(error);
      this.props.updateAlbumFetchStatus({
        fetchStatus: constants.fetchStatus.ERROR
      });
      if (this.props.handleUserError) {
        this.props.handleUserError(error);
      }
    });
  }

  beforeAlbumFetched() {
    this.props.updateImages({
      images: []
    });
    this.props.updateAlbums({
      albums: []
    });
    this.props.updateDisplayedContent({
      displayedContent: constants.galleryContent.ALBUMS
    });
    this.props.updateAlbumFetchStatus({
      fetchStatus: constants.fetchStatus.FETCHING
    });
    this.props.updateUserSearchTerm ? this.props.updateUserSearchTerm({term: ''}) : null;
    this.props.updateSelectedAlbum({selectedAlbum: {}});
  }

  onAlbumSuccess(userName, results) {
    this.props.updateAlbumFetchStatus({
      fetchStatus: constants.fetchStatus.SUCCESS
    });
    this.props.updateUsername({
      userName: results.username || userName
    });
    this.props.updateAlbums({
      albums: results.albums || results
    });
    if (this.props.handleAlbumSuccess) {
      this.props.handleAlbumSuccess();
    }
  }

  onAlbumClicked(selectedItem) {
    // don't go through all the work below if we're clicking on the
    // same album that's already selected and loaded.
    if (selectedItem.title === this.props.provider.selectedAlbum.title && this.props.provider.images.length) {
      this.props.updateDisplayedContent({
        displayedContent: constants.galleryContent.IMAGES
      });
      return;
    }
    this.beforeImageFetch();

    this.props.connector.getItemsInAlbum(selectedItem.id, this.props.imageQueryParams)
    .then(results => {
      this.handleImageReturn(results);
      this.props.updateSelectedAlbum({
        selectedAlbum: selectedItem
      });
      this.props.onChange.userTextInput ? this.props.onChange.userTextInput({target: {value: ''}}) : null;
      this.props.updateUserSearchTerm ? this.props.updateUserSearchTerm({term: ''}) : null;
    }).catch(error => {
      console.log(error);
      this.props.updateImageFetchStatus({
        fetchStatus: constants.fetchStatus.ERROR
      });
    });
  }

  beforeImageFetch() {
    // clear out the existing images before we switch to IMAGES gallery
    this.props.updateImages({
      images: []
    });
    this.props.updateImageFetchStatus({
      fetchStatus: constants.fetchStatus.FETCHING
    });
    this.props.updateDisplayedContent({
      displayedContent: constants.galleryContent.IMAGES
    });
  }

  handleImageReturn(results) {
    this.props.updateImageFetchStatus({
      fetchStatus: constants.fetchStatus.SUCCESS
    });
    this.props.updateImages({
      images: results
    });
  }

  determineGalleryItems() {
    switch (this.props.provider.displayedContent) {
      case constants.galleryContent.ALBUMS:
        return this.props.provider.albums;
      case constants.galleryContent.IMAGES:
        return this.props.provider.images;
      case constants.galleryContent.AGOL:
        return this.props.provider.images;
      default: {
        return [];
      }
    }
  }

  getSearchLabel(term, fetchStatus) {
    if (!term) {
      return null;
    }
    if (fetchStatus === constants.fetchStatus.SUCCESS) {
      return text.searchedFor.replace('${searchterm}', term);
    }
    return text.searchingFor.replace('${searchterm}', term);
  }

  getBreadcrumbs() {
    var breadcrumbs = [];
    var providerRef = this.props.provider;
    var secondUserLabel = (providerRef.selectedAlbum && providerRef.selectedAlbum.id) ? providerRef.selectedAlbum.title : this.getSearchLabel(providerRef.userSearchTerm, providerRef.imageFetchStatus);

    if (providerRef.selectedTab && (providerRef.selectedTab === constants.searchType.TEXT) || this.props.containerState.provider === constants.providers.UNSPLASH) {
      if (!providerRef.photoSearchTerm) {
        return breadcrumbs;
      }
      breadcrumbs.push(new BreadcrumbModel(
        this.getSearchLabel(providerRef.photoSearchTerm, providerRef.imageFetchStatus),
        constants.galleryContent.IMAGES,
        providerRef.displayedContent
      ));
      return breadcrumbs;
    }

    if (providerRef.albumFetchStatus !== constants.fetchStatus.ERROR) {
      if (providerRef.albums.length) {
        breadcrumbs.push(new BreadcrumbModel(
          text.albumsOf.replace('${username}', providerRef.userName),
          constants.galleryContent.ALBUMS,
          providerRef.displayedContent
        ));
      }

      if (providerRef.imageFetchStatus !== constants.fetchStatus.ERROR && secondUserLabel) {
        if (providerRef.images.length || providerRef.selectedAlbum.id || providerRef.userSearchTerm) {
          breadcrumbs.push(new BreadcrumbModel(
            secondUserLabel,
            constants.galleryContent.IMAGES,
            providerRef.displayedContent
          ));
        }
      }
    }

    return breadcrumbs;
  }

  onBreadcrumbClicked(crumb) {
    this.props.updateDisplayedContent({
      displayedContent: crumb.link
    });
  }

  getGalleryHeader() {
    switch (this.props.provider.displayedContent) {
      case constants.galleryContent.ALBUMS:
      case constants.galleryContent.IMAGES:
        return (
          <Breadcrumbs
            crumbs={this.getBreadcrumbs()}
            onClick={this.onBreadcrumbClicked}
          />
        );
      case constants.galleryContent.AGOL:
        return (
          <AGOLHeader
            containerState={this.props.containerState}
            sortField={this.props.provider.sortField}
            sortOrder={this.props.provider.sortOrder}
            onKeyPress={this.props.onKeyPress}
          />
        );
    }
  }

  render() {
    return (
      <div style={this.props.display ? null : {display: 'none'}} className="browse-panel-container">
        <div className="column-sidepanel arrow-box">
          <this.props.sidePanel
            onChange={this.props.onChange}
            onClear={this.props.onClear || null}
            onKeyPress={this.props.onKeyPress || this.onKeyPress}
            containerState={this.props.containerState}
            providerProps={this.props.provider}
          />
        </div>
        <div className="column-gallery">
          {this.getGalleryHeader()}
          <Gallery
            containerState={this.props.containerState}
            providerProps={this.props.provider}
            onAlbumClicked={this.onAlbumClicked}
            onItemDelete={this.props.onKeyPress && this.props.onKeyPress.onItemDelete ? this.props.onKeyPress.onItemDelete : null}
            items={this.determineGalleryItems()}
            displayedContent={this.props.provider.displayedContent}
          />
        </div>
      </div>
    );
  }
}

export default CommonProvider;
