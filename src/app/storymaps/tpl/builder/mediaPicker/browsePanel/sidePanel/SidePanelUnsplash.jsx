import React from 'react';
import ReactDOM from 'react-dom';
import {} from 'lib-build/less!./SidePanelUnsplash';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

var text = i18n.builder.mediaPicker.browsePanel.sidePanel.unsplash;

class SearchInput extends React.Component {
  componentDidMount() {
    var modal = $(ReactDOM.findDOMNode(this)).parents('.modal');
    modal.on('shown.bs.modal', () => {
      if (this.props.setFocus) {
        $(this.refs.textInput).focus();
      }
    });

  }

  componentDidUpdate() {
    if (this.props.setFocus) {
      const activeEl = document.activeElement;
      // if someone is navigating by tabbing, don't take the focus off where they are
      const activeTabIndex = activeEl.tabIndex ? parseInt(activeEl.tabIndex) : 0;
      if (activeEl !== this.refs.textInput && activeTabIndex <= 0) {
        $(this.refs.textInput).focus();
      }
    }
  }

  render() {
    var parentClass = 'input-group search';
    if (this.props.disabled) {
      parentClass += ' disabled';
    }
    return (
      <div className={parentClass}>
        <div className="input-group-addon">
            <span className={'fa fa-' + this.props.icon} />
        </div>
        <input
          ref="textInput"
          tabIndex="1"
          type="text"
          disabled={this.props.disabled}
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
          <span className={'fa fa-' + (this.props.loading ? 'refresh fa-spin' : 'search')} />
        </div>
      </div>
    );
  }
}

class SidePanelUnsplash extends React.Component {

  processAboutSpan(str, spanStr, reactKey) {
    if (str === 'Unsplash') {
      return (
        <a key={reactKey} href={app.cfg.BUILDER_LINKS.unsplashHome} target="_blank"><strong>{spanStr}</strong></a>
      );
    }
    return this.getDefaultSpan(spanStr, reactKey);
  }

  processCopyrightSpan(str, spanStr, reactKey) {
    if (str === 'moreInfoLink') {
      return (
        <a key={reactKey} href={app.cfg.BUILDER_LINKS.unsplashLicense} target="_blank"><strong>{spanStr}</strong></a>
      );
    }
    return this.getDefaultSpan(spanStr, reactKey);
  }

  getDefaultSpan(spanStr, reactKey) {
    return (
      <span key={reactKey}>{spanStr}</span>
    );
  }

  getAboutSpans(textStr, desc) {
    let splitArr = textStr.split(/\$\{(.+?)\}/);
    return splitArr.map((str, i) => {
      const reactKey = 'unsplash-' + desc + '-' + i;
      let spanStr = str;
      if (text[str]) {
        spanStr = text[str];
      }

      if (desc === 'about') {
        return this.processAboutSpan(str, spanStr, reactKey);
      }
      else {
        return this.processCopyrightSpan(str, spanStr, reactKey);
      }
    });
  }

  render() {
    return (
      <div className="mp-sidepanel unsplash">
        <SearchInput
          icon="picture-o"
          placeholder={text.placeholder}
          value={this.props.containerState.searchValue}
          onChange={this.props.onChange}
          onKeyPress={this.props.onKeyPress}
          onClear={this.props.onClear}
          setFocus={this.props.containerState.focusInput}
        />
        <div className="help-text">
          <p>{this.getAboutSpans(text.aboutText, 'about')}</p>
          <p>{this.getAboutSpans(text.copyrightText, 'copyright')}</p>
          <p className="small-text">
            <span>{i18n.builder.mediaPicker.browsePanel.sidePanel.thirdPartyTerms}</span>
            <a className="link" target="_blank" rel="noopener noreferrer" href={app.cfg.BUILDER_LINKS.TERMS.unsplash}>Unsplash</a>
          </p>
        </div>
      </div>
    );
  }
}

export default SidePanelUnsplash;
