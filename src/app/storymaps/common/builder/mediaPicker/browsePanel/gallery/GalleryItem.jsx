import React from 'react';
import constants from './../../constants';
import Helper from '../../utils/Helper';
import {} from 'lib-build/less!./GalleryItem';
import topic from 'dojo/topic';
import i18n from 'lib-build/i18n!../../../../_resources/nls/media';
var text = i18n.mediaPicker.browsePanel.providers.galleryItems;

class GalleryItemDiv extends React.Component {
  constructor() {
    super();
  }

  getIconSpan(iconClass) {
    return (
      <span className={'fa fa-lg fa-' + iconClass} />
    );
  }

  getTextClass(text) {
    if (!text) {
      return null;
    }
    var breakTest = text.match(/\s|\-/);
    if (!breakTest || breakTest.index > 12) {
      return 'break-all';
    }
    return null;
  }

  getHoverText() {
    var mod = this.props.item.modified;
    var dateStr = (mod && mod.toLocaleDateString) ? mod.toLocaleDateString() : (mod ? mod : '');
    if (dateStr) {
      if (this.props.item.agolType && dateStr) {
        dateStr = text.modified + ' ' + dateStr;
      }
      else {
        dateStr = text.uploaded + ' ' + dateStr;
      }
    }
    var ownerStr = this.props.item.owner && this.props.showOwner ? text.by + ' ' + this.props.item.owner : '';
    var popoverClass = this.props.item.usedInStory === false ? 'unused' : null;

    var strArr = [
      '<div ' + (popoverClass ? 'class="' + popoverClass + '"' : '') + '>',
      '<span class="item-popover-title">' + this.props.title + '</span>', '<br>',
      this.props.item.displayName, ownerStr, '<br>',
      dateStr,
      '</div>'
    ];

    if (this.props.item.snippet) {
      strArr.push('<br>', this.props.item.snippet);
    }
    return strArr.join(' ');
  }

  getImgDiv() {
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
            {this.getDeleteButton()}
        </div>
      );
    }
    return (
      <img src={this.props.thumbUrl} />
    );
  }

  getDeleteButton() {
    if (this.props.onItemDelete && this.props.item.usedInStory === false) {
      return (
        <span
          className="remove"
          onClick={(evt) => this.props.onItemDelete(evt, this.props.item)}
          data-toggle="popover"
          data-trigger="hover"
          data-placement="left"
          data-html="true"
          data-content={text.remove1 + ' ' + text.remove2}>
            <span className="fa fa-trash" />
        </span>
      );
    }
    return null;
  }

  render() {
    const combinedClasses = Helper.classnames([this.props.startingClasses, 'mp-gallery-item']);
    const iconSpan = this.props.iconClass ? this.getIconSpan(this.props.iconClass) : null;

    return (
      <div
        onClick={this.props.onClick}
        className={combinedClasses}
        style={this.props.computedStyle} >
        {this.getImgDiv()}

        <div className="title">
          {iconSpan}
          <span className={this.getTextClass(this.props.title)}>{this.props.title}</span>
        </div>
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
    topic.publish('MEDIA-PICKER-SELECTION', {
      type: 'image',
      width: props.item.width,
      height: props.item.height,
      url: props.item.picUrl
    });
  };

  var onItemClicked = function() {
    const itemType = props.item.type;
    var selection = {type: itemType };
    if (itemType === 'image') {
      Object.assign(selection, {
        url: props.item.picUrl
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
      default:
        return 'star';
    }
  };

  var showAlbums = function() {
    return (
      <GalleryItemDiv
        thumbUrl={props.item.thumbUrl || props.item.thumbnail}
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
        thumbUrl={props.item.thumbUrl || props.item.thumbnail}
        title={props.item.name || props.item.title}
        onClick={onImageClicked}
        startingClasses='image'
        computedStyle={getImgStyle(props.item)}
        showPopupDescription={false}
      />
    );
  };

  var showItems = function() {
    return (
      <GalleryItemDiv
        thumbUrl={props.item.thumbUrl || props.item.thumbnail}
        title={props.item.name || props.item.title}
        onItemDelete={props.onItemDelete}
        onClick={onItemClicked}
        startingClasses={'image' + (props.item.usedInStory === false ? ' unused' : '')}
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
