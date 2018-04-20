/* eslint brace-style: 0 */
/* eslint react/no-danger: "warn" */
import React, {Component} from 'react';
import {} from 'lib-build/less!./styles/PrintView.less';

import CommonHelper from 'storymaps/tpl/utils/CommonHelper';

import Cover from './section/Cover';
import Title from './section/Title';
import Sequence from './section/Sequence';
import Immersive from './section/Immersive';
import Credits from './section/Credits';
import PrintSettings from './section/PrintSettings';

import {print} from 'lib-build/i18n!resources/tpl/viewer/nls/app';
const text = print.page;

class PrintViewReact extends Component {

  constructor(params) {
    super(params);
    let initialState = {
      appSections: null,
      appSettings: {},
      printSettings: {
        blackText: false,
        links: false, // true shows links inline, false hides them
        sectionStart: 0,
        sectionEnd: 0,
        useAltMedia: false,
        pageBreaks: false
      }
    };

    Object.assign(initialState, {
      appSections: params.props.appSections,
      appSettings: params.props.appSettings,
      printSettings: Object.assign(initialState.printSettings, params.props.printSettings)
    });
    this.state = initialState;
  }

  componentDidMount() {
    const paramsObj = CommonHelper.getUrlParams();
    const toDelete = ['print', 'sectionStart', 'sectionEnd'];
    Object.keys(paramsObj).forEach((key) => {
      // loose equals because sometimes numbers are strings
      if (toDelete.indexOf(key) >= 0) {
        delete paramsObj[key];
      }
    });
    const searchArr = this.constructSearchArrFromParamsObj(paramsObj);

    let url = window.location.origin + window.location.pathname;
    if (searchArr.length) {
      url += `?${searchArr.join('&')}`;
    }
    this.getAndSetShortenedUrl(url);
  }

  getAndSetShortenedUrl(url) {
    // i tried fetch, and it threw a cors error at me.
    const requestUrl = 'https://arcg.is/prod/shorten?callback=?';
    $.getJSON(requestUrl, {longUrl: url}, (response) => {
      let urlToSet = url;
      if (response && response.data && response.data.url) {
        urlToSet = response.data.url;
      }
      this.shortLink.innerHTML = urlToSet;
      $(this.shortLink).attr('href', urlToSet);
    });
  }

  getAppTheme() {
    /* eslint no-cond-assign: 0 */
    let w = this.state.appSettings.theme;
    const themeClass =  (w && (w = w.colors) && (w = w.themeMajor)) ? `bg-${w}` : '';
    if (themeClass !== 'bg-dark' && themeClass !== 'bg-light') {
      return 'bg-custom';
    }
    return themeClass;
  }

  renderSections() {
    if (!this.state.appSections) {
      return null;
    }
    const useAltMedia = this.state.printSettings.useAltMedia;
    const appTheme = this.getAppTheme();
    return this.state.appSections.map((section, i) => {
      const sectionNumber = i + this.state.printSettings.sectionStart;
      const key = `section-${i}`;
      if (section.type === 'cover') {
        return (
          <Cover
            index={sectionNumber}
            section={section}
            header={this.state.appSettings.header}
            key={key}
            sectionKey={key}
            useAltMedia={useAltMedia}
            appThemeClass={appTheme}
          />
        );
      }
      if (section.type === 'sequence') {
        return (
          <Sequence
            index={sectionNumber}
            section={section}
            key={key}
            sectionKey={key}
            useAltMedia={useAltMedia}
            appThemeClass={appTheme}
          />
        );
      }
      if (section.type === 'title') {
        return (
          <Title
            index={sectionNumber}
            section={section}
            key={key}
            sectionKey={key}
            appThemeClass={appTheme}
          />
        );
      }
      if (section.type === 'immersive') {
        return (
          <Immersive
            index={sectionNumber}
            section={section}
            key={key}
            sectionKey={key}
            useAltMedia={useAltMedia}
            appThemeClass={appTheme}
          />
        );
      }
      if (section.type === 'credits') {
        return (
          <Credits
            index={sectionNumber}
            section={section}
            key={key}
            sectionKey={key}
          />
        );
      }
      return (
        <div key={key} style={{backgroundColor: 'fuchsia'}}>MISSING: Section {section.type}</div>
      );
    });
  }

  changePrintSettings(options) {
    this.setState({printSettings: Object.assign({}, this.state.printSettings, options)});
  }

  changeUrlParams(options) {
    const paramsObj = CommonHelper.getUrlParams();
    paramsObj.print = true;

    let shouldReload = false;
    Object.keys(options).forEach((key) => {
      // loose equals because sometimes numbers are strings
      if (options[key] != paramsObj[key]) {
        Object.assign(paramsObj, {[key]: options[key]});
        shouldReload = true;
      }
    });
    if (shouldReload) {
      this.reloadPage(paramsObj);
    }
  }

  resetUrlParams(keyArr) {
    const paramsObj = CommonHelper.getUrlParams();
    paramsObj.print = true;

    let shouldReload = false;
    keyArr.forEach(key => {
      if (paramsObj.hasOwnProperty(key)) {
        delete paramsObj[key];
        shouldReload = true;
      }
    });
    if (shouldReload) {
      this.reloadPage(paramsObj);
    }
  }

  constructSearchArrFromParamsObj(paramsObj) {
    return Object.keys(paramsObj).map((key => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(paramsObj[key])}`;
    }));
  }

  reloadPage(paramsObj) {
    const searchArr = this.constructSearchArrFromParamsObj(paramsObj);
    window.location.search = `?${searchArr.join('&')}`;
  }

  renderAppTagline() {
    const splitStr1 = text.appTagline.split(/\$\{(.+?)\}/);
    const appTagline = splitStr1.map((str, i) => {
      const reactKey = `tag-${i}`;
      if (str === 'CASCADE_LINK_TEXT') {
        return (
          <a key={reactKey} target="_blank" href={app.cfg.HELP_URL}>{text.cascadeLinkText}</a>
        );
      }
      return (<span key={reactKey}>{str}</span>);
    });

    const splitStr2 = text.readItOnline.split(/\$\{(.+?)\}/);
    const readItDiv = splitStr2.map((str, i) => {
      const reactKey = `readit-${i}`;
      if (str === 'STORY_URL') {
        return (
          <a key={reactKey} target="_blank" ref={(node) => {this.shortLink = node;}}></a>
        );
      }
      return (<span key={reactKey}>{str}</span>);
    });

    return (
      <div className="app-tagline">
        <div>{appTagline}</div>
        <div>{readItDiv}</div>
      </div>
    );

  }

  renderCustomStyles() {
    let w = this.state.appSettings; // walker
    let styles = [];
    /* eslint no-cond-assign: 0 */
    if (w && (w = w.theme) && (w = w.fonts)) {
      if (w.titleFont) {
        styles.push(`h1, h2, h3, h4, h5, h6 { font-family: ${w.titleFont.fontFamily};}`);
      }
      if (w.titleFont) {
        styles.push(`body { font-family: ${w.bodyFont.fontFamily};}`);
      }
    }
    if (this.getAppTheme() === 'bg-custom') {
      w = this.state.appSettings;
      if (w && (w = w.theme) && (w = w.colors) && (w = w.bgMain)) {
        styles.push(`.bg-custom:not(figure), .bg-custom img { background: ${w};}`);
      }
    }
    if (!styles.length) {
      return null;
    }
    return (<style dangerouslySetInnerHTML={{__html: styles.join(' ')}} />);
  }

  render() {

    let classes = 'casc-print';
    const settings = this.state.printSettings;
    if (settings.blackText) {
      classes += ' black-text';
    }
    if (settings.links) {
      classes += ' links-inline';
    }
    if (settings.pageBreaks) {
      classes += ' page-breaks';
    }

    return (
      <div className={classes} key="print">
        {this.renderCustomStyles()}
        <PrintSettings
          settings={this.state.printSettings}
          onChange={this.changePrintSettings.bind(this)}
          triggerUrlParamChange={this.changeUrlParams.bind(this)}
          triggerUrlParamReset={this.resetUrlParams.bind(this)}
        />
        {this.renderAppTagline()}
        {this.renderSections()}
      </div>
    );
  }
}

export default PrintViewReact;
