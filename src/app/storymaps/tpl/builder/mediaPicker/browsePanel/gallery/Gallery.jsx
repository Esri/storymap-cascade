import React from 'react';
import ReactDOM from 'react-dom';
import Helper from '../../utils/Helper';
import GalleryItem from './GalleryItem';
import {} from 'lib-build/less!./Gallery';
import constants from '../../constants';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';
var text = i18n.builder.mediaPicker.browsePanel;

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
    $('.mp-gallery .external-link[data-toggle="popover"]').popover({
      container: thisDomNode,
      delay: {show: 750, hide: 200},
      template: '<div class="popover external-link" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>'
    });

    // scroll to the top of the container if there are no items
    // (this happens not only when there are actually no items to display,
    // but also right before there's a new set of items to display)
    if (!this.props.items || !this.props.items.length) {
      if (typeof thisDomNode.scrollTop === 'function') {
        thisDomNode.scrollTop(0);
      }
      else {
        thisDomNode.scrollTop = 0;
      }
    }
  }

  renderItems() {
    if (!this.props.items || !this.props.items.length) {
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

  getSpinner() {
    // albums displayed and loading, or images displayed and loading.
    if ((this.props.displayedContent === constants.galleryContent.ALBUMS && this.props.providerProps.albumFetchStatus === constants.fetchStatus.FETCHING) ||
        (this.props.displayedContent === constants.galleryContent.IMAGES && this.props.providerProps.imageFetchStatus === constants.fetchStatus.FETCHING) ||
        (this.props.displayedContent === constants.galleryContent.AGOL && this.props.providerProps.imageFetchStatus === constants.fetchStatus.FETCHING)) {
      return (
        <Spinner />
      );
    }
    return null;
  }

  getAlert() {
    if (this.props.items && this.props.items.length) {
      return null;
    }
    // image loading success but not images found.
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
    return null;
  }

  getPlaceholderText() {
    let target = text.providers[this.props.containerState.provider].searchAndBrowse;
    if (!target) {
      return '';
    }
    return target.replace(/\$\{(.*?)}/g, function(brand) {
      return brand.slice(2, -1);
    });

  }

  getPlaceholder() {
    if (this.props.items && this.props.items.length) {
      return null;
    }
    if (this.props && this.props.containerState && this.props.containerState.provider) {
      return (
        <Placeholder text={this.getPlaceholderText()} />
      );
    }
    return null;
  }

  render() {
    // get these items first, because we need to add .centered and
    // possibly .flex-grow to mp-gallery.
    const spinner = this.getSpinner();
    const alert = this.getAlert();
    const placeholder = (alert || spinner) ? null : this.getPlaceholder();
    const hasItems = !spinner && !alert && !placeholder;
    const galleryClasses = Helper.classnames(['row', 'mp-gallery', {
      'centered': !hasItems,
      'flex-grow': placeholder
    }]);
    return (
      <div className={galleryClasses}>
        {spinner || alert || placeholder}
        {hasItems ? this.renderItems() : null}
        {hasItems ? this.renderLimit() : null}
      </div>
    );
  }

}

// show either the list, or show loading, or show...
export default Gallery;
