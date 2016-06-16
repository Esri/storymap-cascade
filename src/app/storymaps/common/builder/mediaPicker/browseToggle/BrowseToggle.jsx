import React from 'react';
import Helper from '../utils/Helper';
import {} from 'lib-build/less!./BrowseToggle';
import {} from 'lib-build/css!./BrowseToggle';
import constants from '../constants';
import i18n from 'lib-build/i18n!../../../_resources/nls/media';
var text = i18n.mediaPicker.browseToggle;

class BrowseToggle extends React.Component {
  getLongerTitleClass(title, length) {
    if (title.length > length) {
      return 'longer-title';
    }
    return '';
  }

  getShrinkableTitle(startingClasses, longCutoff) {
    if (this.props.shortTitle) {
      const shortClasses = 'title-text visible-xs-inline visible-sm-inline ' + this.getLongerTitleClass(this.props.shortTitle, longCutoff);
      const regularClasses = 'title-text hidden-xs hidden-sm ' + this.getLongerTitleClass(this.props.title, longCutoff);
      return (
        <span className={startingClasses}>
          <span className={shortClasses}>{this.props.shortTitle}</span>
          <span className={regularClasses}>{this.props.title}</span>
        </span>
      );
    }
    const titleClasses = startingClasses + ' title-text ' + this.getLongerTitleClass(this.props.title, longCutoff);
    return (
      <span className={titleClasses}>{this.props.title}</span>
    );
  }

  getInlineTitle() {
    return (
      <div className="inline-title">
        <span className={'fa ' + this.props.inlineIcon} />
        {this.getShrinkableTitle('', 12)}
      </div>
    );
  }

  getLogoTitle() {
    return (
      <div className="provider-logo" alt="this.props.title" />
    );
  }

  getPlainTitle() {
    return (
      <div>
        {this.getShrinkableTitle('plain-title', 16)}
      </div>
    );
  }

  differentiateTitle() {
    if (this.props.fullLogo) {
      return this.getLogoTitle();
    }
    if (this.props.inlineIcon) {
      return this.getInlineTitle();
    }
    return this.getPlainTitle();

  }

  render() {
    const toggleClasses = Helper.classnames(['browse-toggle', this.props.type, {
      'selected': this.props.isSelected
    }]);

    return (
      <div className={toggleClasses} onClick={this.props.onClick}>
        {this.differentiateTitle()}
      </div>
    );
  }
}

class AuthMediaHeader extends React.Component {
  findText(typeConstant) {
    let typeKey = Object.keys(constants.contentType).find((key) => {
      return constants.contentType[key] === typeConstant;
    });
    return text.contentType[typeKey];
  }

  getMediaList(mediaCount) {
    if (!mediaCount) {
      return;
    }

    return this.props.authorizedMedia.map((media, i) => {
      let suffix = '';
      if (i === mediaCount - 1) {
        suffix = '.';
      }
      else if (i === mediaCount - 2) {
        suffix = ' ' + text.contentType.OR + ' ';
      }
      else if (i < mediaCount - 2) {
        suffix = text.contentType.listSeparator + ' ';
      }
      return this.findText(media) + suffix;
    }).join('');
  }

  render() {
    const mediaCount = this.props.authorizedMedia ? this.props.authorizedMedia.length : null;
    if (mediaCount === Object.keys(constants.contentType).length) {
      return null;
    }
    return (
      <div className="mp-type-message" >
        <span className="mp-type-details info" style={{display: mediaCount ? 'inline' : 'none'}}>
          <span className="fa fa-info-circle" />
          <span>{text.contentType.starter}</span>
          <span>{this.getMediaList(mediaCount)}</span>
        </span>
        <span className="mp-type-error error" style={{display: mediaCount ? 'none' : 'inline'}}>
          <span className="fa fa-warning" />
          <span>{text.contentType.error}</span>
        </span>
      </div>
    );
  }
}

class BrowseToggles extends React.Component {

  getDivider(i) {
    if (i < this.props.browseToggles.length - 1) {
      return (
       <div className="vert-divider" key={'divider-' + i} />
      );
    }
    return null;
  }

  renderBrowseToggles() {
    var elArr = [];
    this.props.browseToggles.forEach((browseToggle, i) => {
      elArr.push(
        <BrowseToggle
          onClick={() => {
            this.props.selectProvider(browseToggle.type);
          }}
          key={browseToggle.type}
          isLast={i === this.props.browseToggles.length - 1}
          isSelected={browseToggle.type === this.props.browseSelectedProvider}
          {...browseToggle}
        />
      );
      const divider = this.getDivider(i);
      if (divider) {
        elArr.push(divider);
      }
    });
    return elArr;
  }

  render() {
    return (
      <div className="mp-header">
        <AuthMediaHeader
          authorizedMedia={this.props.authorizedMedia}
        />
        <div className="mp-browse-toggles">
          {this.renderBrowseToggles()}
        </div>
      </div>
    );
  }
}

export default BrowseToggles;
