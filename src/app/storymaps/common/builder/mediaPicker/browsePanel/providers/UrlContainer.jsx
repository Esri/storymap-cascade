import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {} from 'lib-build/less!./UrlContainer';
import topic from 'dojo/topic';
import { URLConnector } from '../../connectors/UrlContent';
import Helper from '../../utils/Helper';

import constants from '../../constants';
import i18n from 'lib-build/i18n!commonResources/nls/media';

var text = i18n.mediaPicker.browsePanel.providers.urlContent;

class Alert extends React.Component {
  getAlertSpans() {
    if (Array.isArray(this.props.text)) {
      let mapped = this.props.text.map((str, i) => {
        return (
          <span key={'errortext-' + i} className="block-span">{str}</span>
        );
      });
      return mapped;
    }
    return (
      <span>{this.props.text}</span>
    );
  }

  render() {
    return (
      <div className="alert alert-danger" role="alert" >
        {this.getAlertSpans()}
      </div>
    );
  }
}

class UrlInput extends React.Component {
  componentDidMount() {
    var modal = $(ReactDOM.findDOMNode(this)).parents('.modal');
    modal.on('shown.bs.modal', () => {
      if (this.props.setFocus) {
        $(this.refs.textareaInput).focus();
      }
    });

  }

  componentDidUpdate() {
    if (this.props.setFocus) {
      const activeEl = document.activeElement;
      // if someone is navigating by tabbing, don't take the focus off where they are
      const activeTabIndex = activeEl.tabIndex ? parseInt(activeEl.tabIndex) : 0;
      if (activeEl !== this.refs.textareaInput && activeTabIndex <= 0) {
        $(this.refs.textareaInput).focus();
      }
    }
  }

  render() {
    return (
      <div className="input-group search">
        <div className="input-group-addon">
            <span className='fa fa-link' />
        </div>
        <textarea
          tabIndex="1"
          ref="textareaInput"
          type="textarea"
          value={this.props.value}
          className="form-control"
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          onKeyPress={this.props.onKeyPress} />
        <div
          tabIndex={this.props.disabled ? null : (this.props.value ? '1' : null)}
          className="btn danger input-group-addon"
          style={this.props.value ? null : {display: 'none'}}
          onClick={this.props.value ? (evt) => this.props.onClear(Object.assign({}, evt, {charCode: 13})) : null}
          onKeyPress={this.props.onClear}
          disabled={this.props.disabled} >
          <span className="fa fa-remove" />
        </div>
        <div
          tabIndex={this.props.disabled ? null : '1'}
          className="btn input-group-addon"
          onKeyPress={this.props.onKeyPress}
          // treat click like enter
          onClick={this.props.disabled ? null : (evt) => this.props.onKeyPress(Object.assign({}, evt, {charCode: 13}))}
          disabled={this.props.disabled} >
          <span className={'fa fa-' + (this.props.loading ? 'refresh fa-spin' : 'check')} />
        </div>
      </div>

    );
  }
}

class UrlContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      textInputValue: '',
      contentTypeDescriptor: 'generic',
      focusInput: false,
      hasError: false,
      errorText: ''
    };
  }

  compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    arr1.sort();
    arr2.sort();
    return arr1.every((d, i) => {
      return arr2[i] === d;
    });
  }

  componentWillReceiveProps(nextProps) {
    const shouldFocus = (nextProps.display && !this.props.display) || nextProps.openFocus;
    let newState = {
      focusInput: shouldFocus,
      contentTypeDescriptor: this.computeContentTypes(nextProps.authorizedMedia)
    };
    const authMediaChanged = !this.compareArrays(nextProps.authorizedMedia, this.props.authorizedMedia);
    if (shouldFocus || authMediaChanged) {
      Object.assign(newState, {
        textInputValue: '',
        hasError: false
      });
    }
    if (nextProps.currentMedia) {
      const media = nextProps.currentMedia[nextProps.currentMedia.type];
      const appId = app.data.appItem.item.id;
      switch (nextProps.currentMedia.type) {
        case 'webpage':
          var src = nextProps.currentMedia.webpage.url.replace(/^\/\//, '');
          var textInputValue = src;
          if (nextProps.currentMedia.webpage.height) {
            textInputValue = `<iframe src="${src}" height="${nextProps.currentMedia.webpage.height}"></iframe>`;
          }
          Object.assign(newState, {textInputValue});
          break;
        case 'image': {
          // TODO: not sure this is sufficient to catch all images that don't come
          // from services, and exclude the ones that do.
          if (media.url && (media.source === 'url' || !media.thumbUrl) && (!appId || !media.url.match(appId + '/resources'))) {
            Object.assign(newState, {
              textInputValue: media.url.replace(/^\/\//, '')
            });
          }
          break;
        }
        case 'video': {
          if (media.url) {
            Object.assign(newState, {
              textInputValue: media.url.replace(/^\/\//, '')
            });
          }
          else {
            console.warn('video fell through because no url');
          }
          break;
        }
        case 'audio': {
          if (media.url) {
            Object.assign(newState, {
              textInputValue: media.url.replace(/^\/\//, '')
            });
          }
          else {
            console.warn('audio fell through because no url');
          }
          break;
        }
        default:
          console.warn('currentMedia state fell through', nextProps.currentMedia);
      }
    }
    this.setState(newState);
  }

  // ----- onChange functions ----- //

  textInput(evt) {
    let val = evt.target.value;
    if (!val.trim()) {
      val = '';
    }
    this.setState({
      textInputValue: val,
      hasError: false
    });
  }

  // ----- onKeyPress functions ----- //

  textKeypress(evt) {
    if (!evt.charCode && evt.charCode !== 0) {
      return;
    }
    if (evt.charCode === 13 && !evt.shiftKey) {
      if (evt.preventDefault) {
        evt.preventDefault();
      }
      this.textSubmit();
    }
  }

  textClear(evt) {
    if (evt.charCode === 13) {
      this.setState({
        textInputValue: '',
        focusInput: true,
        hasError: false
      });
    }
  }

  // ----- actual submit functions ----- //

  textSubmit() {
    this.processPageAddress();
  }

  processPageAddress() {
    var addr = this.state.textInputValue.trim();
    if (!addr) {
      return;
    }

    var iframeHeight;

    // if the user has entered an iframe, we just want the
    // src tag of the iframe, since we'll be styling it ourselves
    if (URLConnector.checkForIframe(addr)) {
      iframeHeight = URLConnector.getIframeHeight(addr);
      addr = URLConnector.getIframeSrc(addr);
    }

    // fire off four url checks in parallel

    let promiseArr = [], promiseTypeMap = [];

    if (this.checkSingleMediaType('IMAGE')) {
      promiseArr.push(URLConnector.checkForImage(addr));
      promiseTypeMap.push(constants.contentType.IMAGE);
    }
    if (this.checkSingleMediaType('VIDEO')) {
      promiseArr.push(URLConnector.checkYoutubeUrl(addr));
      promiseArr.push(URLConnector.checkVimeoUrl(addr));
      promiseTypeMap.push(constants.contentType.VIDEO);
      promiseTypeMap.push(constants.contentType.VIDEO);
    }
    if (this.checkSingleMediaType('AUDIO')) {
      promiseArr.push(URLConnector.checkForAudio(addr));
      promiseTypeMap.push(constants.contentType.AUDIO);
    }

    Promise.all(promiseArr).then((results) => {
      var found = results.some((result, i) => {
        if (result === constants.fetchStatus.NON_MATCHING_URL) {
          return false;
        }
        this.publishSelection(Object.assign({type: promiseTypeMap[i]}, result));
        return true;
      });
      if (found) {
        return;
      }
      // TODO: better way of excluding audio
      if (this.checkSingleMediaType('WEBPAGE') && !(addr.match(/\.(mp3|m4a|wav)$/i))) {
        if (addr.indexOf('http:\/\/') !== 0 && addr.indexOf('https:\/\/') !== 0 && addr.indexOf('\/\/') !== 0) {
          addr = '//' + addr;
        }
        this.publishSelection({type: 'webpage', url: addr, height: iframeHeight});
        return;
      }

      // we only get here if all the previous checks fall through...
      var errorTextArr = [];
      if (this.state.contentTypeDescriptor === 'imageOnly') {
        errorTextArr.push(Helper.unescapeBrands(text.uploadErrors.imageOnly1), Helper.unescapeBrands(text.uploadErrors.imageOnly2));
      }
      else if (this.state.contentTypeDescriptor === 'imageAndVideo') {
        errorTextArr.push(Helper.unescapeBrands(text.uploadErrors.imageAndVideo1), Helper.unescapeBrands(text.uploadErrors.imageAndVideo2));
      }
      else {
        errorTextArr.push(Helper.unescapeBrands(text.uploadErrors.generic));
      }
      this.setState({
        hasError: true,
        errorText: errorTextArr
      });
    }).catch((error) => {
      this.setState({
        hasError: true,
        errorText: this.getErrorMessage(error) + ' ' + text.uploadErrors.tryAgain
      });
    });

  }

  getErrorMessage(error) {
    let msg = error.reason === constants.fetchStatus.BAD_FORMAT ? text.uploadErrors.badFormat : text.uploadErrors.inaccessible;
    let splitArr = msg.split(/\$\{(.+?)\}/);
    return splitArr.map((str) => {
      if (str === 'media-type') {
        str = text.uploadErrors.mediaTypes[error.type] || text.uploadErrors.mediaTypes.generic;
      }
      return str;
    }).join('');
  }

  publishSelection(selection) {
    this.textClear({charCode: 13});
    topic.publish('MEDIA-PICKER-SELECTION', selection);
  }

  computeContentTypes(authMedia) {
    if (!authMedia || !authMedia.length) {
      console.warn('no authorized media');
      return 'generic';
    }
    if (authMedia.includes(constants.contentType.WEBPAGE)) {
      return 'generic';
    }
    if (authMedia.includes(constants.contentType.VIDEO) && authMedia.includes(constants.contentType.IMAGE)) {
      return 'imageAndVideo';
    }
    if (authMedia.includes(constants.contentType.IMAGE)) {
      return 'imageOnly';
    }
    console.warn('something funny happened with authorized media', authMedia);
    return 'generic';
  }

  getUploadHeader() {
    return text.uploadHeaders[this.state.contentTypeDescriptor];
  }

  getAlert() {
    if (this.state.hasError) {
      return (
        <Alert text={this.state.errorText} />
      );
    }
  }

  getMediaIcons() {
    let mediaIcons = [];
    if (!this.props.authorizedMedia || !this.props.authorizedMedia.length) {
      return;
    }
    if (this.checkSingleMediaType('IMAGE')) {
      mediaIcons.push(
        <span className="fa fa-picture-o" key="media-picture-o" />
      );
    }
    if (this.checkSingleMediaType('AUDIO')) {
      mediaIcons.push(
        <span className="fa fa-volume-up" key="media-volume-up" />
      );
    }
    if (this.checkSingleMediaType('VIDEO')) {
      mediaIcons.push(
        <span className="fa fa-vimeo" key="media-vimeo" />,
        <span className="fa fa-youtube" key="media-youtube" />
      );
    }
    if (this.checkSingleMediaType('WEBPAGE')) {
      mediaIcons.push(
        <span className="fa fa-code" key="media-code" />,
        <span className="www" key="media-www">www.</span>
      );
    }
    return mediaIcons;
  }

  checkSingleMediaType(mediaType) {
    return this.props.authorizedMedia.includes(constants.contentType[mediaType]);
  }

  getHelpText() {
    const imageAllowed = this.checkSingleMediaType('IMAGE');
    const videoAllowed = this.checkSingleMediaType('VIDEO');
    const webpageAllowed = this.checkSingleMediaType('WEBPAGE');

    let divArr = [];

    if (imageAllowed && videoAllowed && webpageAllowed) {
      divArr.push(<div key="link-text-1">{Helper.unescapeBrands(text.linkText.imageVideoWebpage1)}</div>);
      divArr.push(<div key="link-text-2">{Helper.unescapeBrands(text.linkText.imageVideoWebpage2)}</div>);
    }
    else if (imageAllowed && videoAllowed) {
      divArr.push(<div key="link-text-1">{Helper.unescapeBrands(text.linkText.imageAndVideo1)}</div>);
      divArr.push(<div key="link-text-2">{Helper.unescapeBrands(text.linkText.imageAndVideo2)}</div>);
    }
    else if (imageAllowed) {
      divArr.push(<div key="link-text-1">{Helper.unescapeBrands(text.linkText.imageOnly)}</div>);
    }
    else {
      divArr.push(<div key="link-text-1">NO RECOGNIZABLE CONTENT TYPES</div>);
    }

    divArr.push(<div key="link-text-ender">{text.linkText.ender}</div>);

    return divArr;

  }

  render() {
    var placeholder = text.placeholder.replace(/\$\{(.*?)}/g, function(str) {
      return str.slice(2, -1);
    });
    return (
      <div
        style={this.props.display ? null : {display: 'none'}}
        className="browse-panel-container url-container" >
        <div className="help-title">{this.getUploadHeader()}</div>
        <UrlInput
          placeholder={placeholder}
          value={this.state.textInputValue}
          setFocus={this.state.focusInput}
          onKeyPress={this.textKeypress.bind(this)}
          onChange={this.textInput.bind(this)}
          onClear={this.textClear.bind(this)}
          hasError={!this.state.isValid}
        />
        <div className="help-section">
          <div className="media-icons">{this.getMediaIcons()}</div>
          <div className="help-text">
            {this.getHelpText()}
          </div>
        </div>
        {this.getAlert()}
      </div>
    );
  }
}

var mapStateToProps = function(state) {
  return {
    provider: state.browsePanel.urlContent
  };
};

var mapDispatchToProps = function(dispatch) {
  var dispatchWithType = function(action, args) {
    var argumentsWithType = Object.assign({}, args, { providerType: constants.providers.URL });

    dispatch(action(argumentsWithType));
  };

  return {
    updateImageFetchStatus: function(status) {
      dispatchWithType(actions.updateImageFetchStatus, status);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UrlContainer);
