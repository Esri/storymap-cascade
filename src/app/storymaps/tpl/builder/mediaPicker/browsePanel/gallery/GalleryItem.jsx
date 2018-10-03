import React from 'react';
import constants from './../../constants';
import Helper from '../../utils/Helper';
import {} from 'lib-build/less!./GalleryItem';
import topic from 'dojo/topic';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';
var text = i18n.builder.mediaPicker.browsePanel.providers.galleryItems;

class GalleryItemDiv extends React.Component {
  constructor() {
    super();
  }

  getIconSpan(iconClass) {
    return (
      <span className={'fa fa-lg fa-' + iconClass} />
    );
  }

  getTextClass(str) {
    if (!str) {
      return null;
    }
    var breakTest = str.match(/\s|\-/);
    if (!breakTest || breakTest.index > 12) {
      return 'break-all';
    }
    return null;
  }

  getHoverText() {
    if (!this.props.item || !this.props.item.hoverText) {
      return null;
    }
    var popoverClass = this.props.item.usedInStory === false ? 'unused' : null;
    var descStr = this.props.showOwner ? this.props.item.hoverText.typeAndOwner : this.props.item.hoverText.typeOnly;

    return '<div ' + (popoverClass ? 'class="' + popoverClass + '"' : '') + '>' + descStr + '</div>';
  }

  getImgDiv() {
    if (this.props.hasError) {
      return (
        <div className="img-wrapper load-error">
          <div className="alert alert-danger">
            <span className="fa fa-exclamation-triangle text-danger" />
            <br />
            <span className="text-danger">{text.uploadError}</span>
            {this.getDeleteButton()}
          </div>
        </div>
      );
    }
    if (this.props.showPopupDescription) {
      return (
        <div className="img-wrapper">
          <img
            data-toggle="popover"
            data-trigger="hover"
            data-html="true"
            data-placement="left"
            data-content={this.getHoverText()}
            src={this.props.thumbUrl} />
            {this.getLoading()}
            {this.getDeleteButton()}
        </div>
      );
    }
    return (
      <div className="img-wrapper">
        <img src={this.props.thumbUrl} />
        {this.getExternalLinkButton()}
      </div>
    );
  }

  getDeleteButton() {
    if (!this.props.onItemDelete || !this.props.item || this.props.item.usedInStory !== false) {
      return null;
    }
    return (
      <span
        className="remove floating-btn"
        onClick={(evt) => this.props.onItemDelete(evt, this.props.item)}
        data-toggle="popover"
        data-trigger="hover"
        data-placement="left"
        data-html="true"
        data-content={this.props.item.getItemDeleteText(this.props.item)}>
          <span className="fa fa-trash" />
      </span>
    );
  }

  getExternalLinkButton() {
    if (!this.props.item || !this.props.item.externalLink) {
      return null;
    }
    let linkObj = this.props.item.externalLink;
    return (
      <a href={linkObj.link} target="_blank">
        <span
          className="external-link floating-btn"
          style={{'backgroundImage': 'url(' + linkObj.background + ')'}}
          data-toggle="popover"
          data-trigger="hover"
          data-placement="left"
          data-html="true"
          data-content={linkObj.hoverText + '&nbsp;&nbsp;<span class="fa fa-external-link"></span>'}
          onClick={(evt) => {
            evt.stopPropagation();
          }}
        >
        </span>
      </a>
    );
  }

  getDeleteHoverText() {
    if (this.props.item.error) {
      return text.removeFailed;
    }
    return text.remove1 + ' ' + text.remove2;
  }

  getLoading() {
    if (this.props.loading) {
      return (
        <span className="small-loader" />
      );
    }
    return null;
  }

  getTitle() {
    if (this.props.title) {
      return (
        <div className="title">
          {this.props.iconClass ? this.getIconSpan(this.props.iconClass) : null}
          <span className={this.getTextClass(this.props.title)}>{this.props.title}</span>
        </div>
      );
    }
  }

  render() {
    const combinedClasses = Helper.classnames([this.props.startingClasses, 'mp-gallery-item']);

    return (
      <div
        onClick={this.props.onClick}
        className={combinedClasses}
        style={this.props.computedStyle} >
        {this.getImgDiv()}
        {this.getTitle()}

      </div>
    );
  }
}

function GalleryItem(props) {
  var onAlbumClicked = function() {
    props.onAlbumClicked({
      id: props.item.id,
      title: props.item.title
    });
  };

  var onImageClicked = function() {
    if (props.item.onSelected) {
      props.item.onSelected();
    }
    if (props.item.getPicUrl) {
      // getPicUrl should return a result with width, height, and url,
      // no matter what. if the network request fails, getPicUrl should
      // still resolve with the original item width, height, url.
      props.item.getPicUrl(props.item).then(result => {
        topic.publish('MEDIA-PICKER-SELECTION', Object.assign(result, {type: 'image'}));
      });
      return;
    }
    topic.publish('MEDIA-PICKER-SELECTION', {
      type: 'image',
      width: props.item.width,
      height: props.item.height,
      url: props.item.picUrl,
      thumbUrl: props.item.thumbUrl
    });
  };

  var onItemClicked = function() {
    const itemType = props.item.type;
    var selection = {type: itemType };
    if (itemType === 'image') {
      Object.assign(selection, {
        url: props.item.picUrl,
        thumbUrl: props.item.thumbUrl
      });
    }
    else if (itemType === 'audio') {
      Object.assign(selection, {
        url: props.item.url
      });
    }
    else {
      Object.assign(selection, {
        id: props.item.id
      });
    }
    topic.publish('MEDIA-PICKER-SELECTION', selection);
  };

  var showItemContents = function() {
    switch (props.type) {
      case constants.galleryContent.ALBUMS:
        return showAlbums();
      case constants.galleryContent.IMAGES:
        return showImages();
      case constants.galleryContent.AGOL:
        return showItems();
      default:
        return null;
    }
  };

  var getAlbumStyle = function() {
    return {
      width: constants.galleryContent.ALBUM_HEIGHT + 'px'
    };
  };

  var getImgStyle = function(item) {
    var computedWidth;
    if (item.thumbWidth && item.thumbHeight) {
      var scaleFactor = constants.galleryContent.IMG_HEIGHT / parseInt(item.thumbHeight, 10);
      computedWidth = (parseInt(item.thumbWidth, 10) * scaleFactor) + 'px';
    }
    return {
      width: computedWidth || 'auto',
      maxWidth: computedWidth ? null : (constants.galleryContent.IMG_HEIGHT * 1.5) + 'px'
    };
  };

  var getItemIcon = function(item) {
    switch (item.type) {
      case constants.contentType.WEBMAP:
        return 'map-o';
      case constants.contentType.WEBSCENE:
        return 'globe fa-2x';
      case constants.contentType.IMAGE:
        return 'picture-o';
      case constants.contentType.AUDIO:
        return 'volume-up';
      default:
        return 'star';
    }
  };

  var showAlbums = function() {
    return (
      <GalleryItemDiv
        thumbUrl={props.item.tokenizedThumbUrl || props.item.thumbUrl || props.item.thumbnail}
        title={props.item.name || props.item.title}
        onClick={onAlbumClicked}
        startingClasses='album'
        computedStyle={getAlbumStyle()}
        showPopupDescription={false}
      />
    );
  };

  var showImages = function() {
    return (
      <GalleryItemDiv
        thumbUrl={getItemThumbUrl(props.item)}
        title={props.item.name || props.item.title}
        onClick={onImageClicked}
        startingClasses='image'
        computedStyle={getImgStyle(props.item)}
        showPopupDescription={false}
        item={props.item}
      />
    );
  };

  var getItemThumbUrl = function(item) {
    if (item.dataUrl && item.dataUrl !== true) {
      return item.dataUrl;
    }
    return item.tokenizedThumbUrl || item.thumbUrl || item.thumbnail;
  };

  var showItems = function() {
    const startingClasses = Helper.classnames(['image', {
      'unused': props.item.usedInStory === false,
      'loading': props.item.isTemp
    }]);
    return (
      <GalleryItemDiv
        thumbUrl={getItemThumbUrl(props.item)}
        loading={props.item.isTemp}
        hasError={props.item.error}
        title={props.item.name || props.item.title}
        onItemDelete={props.item.isTemp ? null : props.onItemDelete}
        onClick={props.item.error || props.item.isTemp ? null : onItemClicked}
        startingClasses={startingClasses}
        computedStyle={getImgStyle(props.item)}
        iconClass={getItemIcon(props.item)}
        showPopupDescription={true}
        showOwner={props.showOwner}
        item={props.item}
      />
    );
  };

  var itemContents = showItemContents();

  return (
    itemContents
  );
}

export default GalleryItem;
