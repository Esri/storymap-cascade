/* eslint brace-style: 0 */
/* eslint react/no-danger: "warn" */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import urlUtils from 'esri/urlUtils';

import Controller from 'storymaps-react/tpl/core/Controller';
import PrintViewReact from './PrintViewReact';

class PrintViewWrapper extends Component {

  constructor(props) {
    super(props);
    $('body').addClass('print-view');
    app.Controller = Controller;
  }

  appInitComplete() {

    if (!app.data || !app.data.appItem) {
      console.warn('No app data', app);
      return;
    }
    const urlParams = urlUtils.urlToObject(window.location.href).query;
    const appJson = app.data.appItem.data.values;
    const allSections = appJson.sections;
    let appSections = allSections;
    let sectionStart = 1;
    let sectionEnd = allSections.length;
    if (urlParams) {
      sectionStart = parseInt((urlParams.sectionStart || sectionStart), 10);
      sectionEnd = parseInt((urlParams.sectionEnd || sectionEnd), 10);
      appSections = allSections.slice(sectionStart - 1, sectionEnd);
    }

    let walker = allSections[0];
    if (walker && (walker = walker.foreground) && (walker = walker.title)) {
      document.title = walker;
    }

    const props = {
      allSections,
      appSections,
      appSettings: appJson.settings,
      printSettings: {sectionStart, sectionEnd}
    };

    this.render(props);
    this.hideLoadingOverlay();
  }

  hideLoadingOverlay() {
    $('#loadingIndicator, #loadingMessage').addClass('fadeOut').fadeOut(300);
    $('#loadingOverlay').fadeOut(600);
  }

  init() {
    return true;
  }

  isStoryBlank() {
    return app.Controller.isStoryBlank();
  }

  render(props) {
    ReactDOM.render(
      <PrintViewReact
        props={props}
      />
    , document.getElementById('print-wrapper'));
  }
}

export default PrintViewWrapper;
