import React from 'react';
import Helper from '../utils/Helper';
import {} from 'lib-build/less!./BrowseToggle';
import {} from 'lib-build/css!./BrowseToggle';
import constants from '../constants';
import i18n from 'lib-build/i18n!commonResources/nls/media';
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

  getInfoSpan(msg) {
    return (
      <span className="mp-type-details info">
        <i className="fa fa-info-circle" />
        <span>{msg}</span>
      </span>
    );
  }

  getErrorSpan(err) {
    return (
      <span className="mp-type-error error">
        <i className="fa fa-warning" />
        <span>{err}</span>
      </span>
    );
  }

  getMediaList(authMedia) {
    if (!authMedia || !authMedia.length) {
      return this.getErrorSpan(text.contentType.error);
    }

    // some shortcuts
    let IMAGE = constants.contentType.IMAGE;
    let VIDEO = constants.contentType.VIDEO;
    let WEBPAGE = constants.contentType.WEBPAGE;

    switch (authMedia.length) {
      // the untranslated strings here are fatal errors, where the authMedia array doesn't
      // match what the app is prepared to handle.
      case 1:
        if (authMedia.indexOf(IMAGE) >= 0) {
          return this.getInfoSpan(text.contentType.imageOnly);
        }
        return this.getErrorSpan('only one authorized media, but it wasnt image!');
      case 2:
        if (authMedia.indexOf(IMAGE) >= 0 && authMedia.indexOf(VIDEO) >= 0) {
          return this.getInfoSpan(text.contentType.imageAndVideo);
        }
        return this.getErrorSpan('two authorized media, but it wasnt image/video!');
      case 3:
      case 4:
        if (authMedia.indexOf(IMAGE) >= 0 && authMedia.indexOf(VIDEO) >= 0 && authMedia.indexOf(WEBPAGE) >= 0) {
          return this.getInfoSpan(text.contentType.imageVideoWebpage);
        }
        return this.getErrorSpan('three authorized media, but it wasnt image/video/webpage!');
      default:
        return this.getErrorSpan('more than three but less than all authorized media... ?');
    }
  }

  render() {
    // shortcut
    const authMedia = this.props.authorizedMedia;
    // if there are as many authorizedMedia types as total allowed media types,
    // don't display anything. get out of here.
    if (authMedia && authMedia.length) {
      const authCount = authMedia.length;
      const allCount = Object.keys(constants.contentType).length;
      // TODO: fix for allCount - 1, which is where audio isn't included. immersive backgrounds.
      if (authCount === allCount || authCount === allCount - 1) {
        return null;
      }

    }

    return (
      <div className="mp-type-message" >
        {this.getMediaList(authMedia)}
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
