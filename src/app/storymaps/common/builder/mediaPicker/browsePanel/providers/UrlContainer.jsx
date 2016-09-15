import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {} from 'lib-build/less!./UrlContainer';
import topic from 'dojo/topic';
import { URLConnector } from '../../connectors/UrlContent';

import constants from '../../constants';
import i18n from 'lib-build/i18n!../../../../_resources/nls/media';

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

    // if the user has entered an iframe, we just want the
    // src tag of the iframe, since we'll be styling it ourselves
    if (URLConnector.checkForIframe(addr)) {
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
      if (this.checkSingleMediaType('WEBPAGE')) {
        if (addr.indexOf('http:\/\/') !== 0 && addr.indexOf('https:\/\/') !== 0 && addr.indexOf('\/\/') !== 0) {
          addr = '//' + addr;
        }
        this.publishSelection({type: 'webpage', url: addr});
      }
      else {
        this.setState({
          hasError: true,
          errorText: text.uploadErrors[this.state.contentTypeDescriptor]
        });
      }
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

  getSingleMediaTypeText(arr, mediaType) {
    if (this.checkSingleMediaType(mediaType) && text.linkText[mediaType]) {
      if (Array.isArray(text.linkText[mediaType])) {
        text.linkText[mediaType].forEach(str => {
          arr.push(str);
        });
      }
      else {
        arr.push(text.linkText[mediaType]);
      }
    }
  }

  getMediaListStr(arr) {
    if (!arr || !arr.length) {
      return;
    }
    const arrLength = arr.length;
    return arr.map((str, i) => {
      let suffix = '';
      if (i === arrLength - 1) {
        suffix = '.';
      }
      else if (i === arrLength - 2) {
        suffix = ' ' + text.linkText.OR + ' ';
      }
      else if (i < arrLength - 2) {
        suffix = text.linkText.listSeparator + ' ';
      }
      return str + suffix;
    }).join('');
  }

  getHelpText() {
    let mediaTypesList = [];
    this.getSingleMediaTypeText(mediaTypesList, 'IMAGE');
    this.getSingleMediaTypeText(mediaTypesList, 'VIDEO');
    this.getSingleMediaTypeText(mediaTypesList, 'WEBPAGE');

    let divArr = [];

    let listStr = '';
    if (mediaTypesList.length > 0) {
      listStr = this.getMediaListStr(mediaTypesList);
    }

    let starterStr = text.linkText.starter + ' ';
    if (this.checkSingleMediaType('VIDEO')) {
      starterStr += text.linkText.hasVideo;
      divArr.push(<div key="link-text-starter">{starterStr}</div>);
      if (listStr) {
        divArr.push(<div key="link-text-list">{text.linkText.listStarterWithAlso + ' ' + listStr}</div>);
      }
    }
    else {
      if (!listStr) {
        return [<div key="link-text-ender">{text.linkText.ender}</div>];
      }
      divArr.push(<div key="link-text-starter">{starterStr + ' ' + text.linkText.listStarterWithoutAlso + ' ' + listStr}</div>);
    }
    divArr.push(<div key="link-text-ender">{text.linkText.ender}</div>);

    return divArr;

  }

  render() {
    return (
      <div
        style={this.props.display ? null : {display: 'none'}}
        className="browse-panel-container url-container" >
        <div className="help-title">{this.getUploadHeader()}</div>
        <UrlInput
          placeholder={text.placeholder}
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
