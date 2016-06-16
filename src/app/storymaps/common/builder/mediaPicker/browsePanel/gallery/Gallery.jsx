import React from 'react';
import ReactDOM from 'react-dom';
import GalleryItem from './GalleryItem';
import {} from 'lib-build/less!./Gallery';
import constants from '../../constants';
import i18n from 'lib-build/i18n!../../../../_resources/nls/media';
var text = i18n.mediaPicker.browsePanel;

function Spinner() {
  return (
    <div className="small-loader" role="alert" ></div>
  );
}

function Alert(props) {
  return (
    <div className="alert alert-danger" role="alert" >
      <span>{props.text}</span>
    </div>
  );
}

class Placeholder extends React.Component {
  render() {
    return (
      <div className="placeholder">{this.props.text}</div>
    );
  }
}

class Gallery extends React.Component {
  constructor() {
    super();
  }

  componentDidUpdate() {
    // attach popovers to gallery container because items are position: relative
    // and popovers break or get hidden under the sidepanel with position: relative
    const thisDomNode = $(ReactDOM.findDOMNode(this));
    $('.mp-gallery img[data-toggle="popover"]').popover({
      container: thisDomNode,
      delay: {show: 500, hide: 200}
    });
    $('.mp-gallery .remove[data-toggle="popover"]').popover({
      container: thisDomNode,
      delay: {show: 750, hide: 200},
      template: '<div class="popover remove" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>'
    });
  }

  renderItems() {
    // albums displayed and loading, or images displayed and loading.
    if ((this.props.displayedContent === constants.galleryContent.ALBUMS && this.props.providerProps.albumFetchStatus === constants.fetchStatus.FETCHING) ||
        (this.props.displayedContent === constants.galleryContent.IMAGES && this.props.providerProps.imageFetchStatus === constants.fetchStatus.FETCHING) ||
        (this.props.displayedContent === constants.galleryContent.AGOL && this.props.providerProps.imageFetchStatus === constants.fetchStatus.FETCHING)) {
      return (
        <Spinner />
      );
    }

    // image loading success but not images found.
    if (!this.props.items || !this.props.items.length) {
      if (this.props.displayedContent === constants.galleryContent.IMAGES && this.props.providerProps.imageFetchStatus === constants.fetchStatus.SUCCESS) {
        return (
          <Alert text={text.providers.noPhotosFound}/>
        );
      }
      if (this.props.displayedContent === constants.galleryContent.AGOL && this.props.providerProps.imageFetchStatus === constants.fetchStatus.SUCCESS) {
        if (this.props.providerProps.searchLocation === constants.searchLocation.STORY && !this.props.containerState.storyResourceCount) {
          return (
            <Alert text={text.providers.noItemsInThisStory}/>
          );
        }
        return (
          <Alert text={text.providers.noItemsFound}/>
        );
      }
      let walker;
      if ((walker = this.props) && (walker = walker.containerState) && (walker = walker.provider)) {
        return <Placeholder text={text.providers[walker].searchAndBrowse || ''} />;
      }
      return null;
    }

    return this.props.items.map((item) => {
      return (
        <GalleryItem
          key={item.id}
          item={item}
          showOwner={this.props.providerProps && this.props.providerProps.searchLocation !== constants.searchLocation.MINE}
          onItemDelete={this.props.onItemDelete}
          onAlbumClicked={this.props.onAlbumClicked}
          type={this.props.displayedContent}
        />
      );
    });
  }

  renderLimit() {
    if (this.props.displayedContent !== constants.galleryContent.AGOL) {
      return;
    }
    if (!this.props.items || this.props.items.length < 100 || this.props.providerProps.searchLocation === constants.searchLocation.STORY) {
      return;
    }
    return (
      <div className="alert alert-info limit-reached">{text.providers.limitReached}</div>
    );
  }

  render() {
    return (
      <div className="row mp-gallery">
        {this.renderItems()}
        {this.renderLimit()}
      </div>
    );
  }

}

// show either the list, or show loading, or show...
export default Gallery;
