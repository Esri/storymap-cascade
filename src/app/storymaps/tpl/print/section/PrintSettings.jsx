/* eslint brace-style: 0 */
import React, { Component } from 'react';

import {} from 'lib-build/less!../styles/PrintSettings';

import {print} from 'lib-build/i18n!resources/tpl/viewer/nls/app';
const text = print.settings;

class PrintSettings extends Component {

  constructor(props) {
    super(props);
    this.state = props.settings;
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const nextSettings = nextProps.settings;
    let newSettings = {};
    if ((nextSettings.sectionStart || nextSettings.sectionStart === 0) && nextSettings.sectionStart !== this.state.sectionStart) {
      Object.assign(newSettings, {sectionStart: nextSettings.sectionStart});
    }
    if ((nextSettings.sectionEnd || nextSettings.sectionEnd === 0) && nextSettings.sectionEnd !== this.state.sectionEnd) {
      Object.assign(newSettings, {sectionEnd: nextSettings.sectionEnd});
    }
    this.setState(newSettings);
  }

  handleInputChange(evt) {
    const target = evt.target;
    const val = target.type === 'checkbox' ? target.checked : target.value;
    const name = evt.target.name;
    let newProp = {[name]: val};
    if (!name.match('section')) {
      this.props.onChange(newProp);
    }
    this.setState(newProp);
  }

  prepUrlParamChange() {
    this.props.triggerUrlParamChange({
      sectionStart: this.state.sectionStart,
      sectionEnd: this.state.sectionEnd
    });
  }

  prepUrlParamReset() {
    this.props.triggerUrlParamReset(['sectionStart', 'sectionEnd']);
  }

  render() {

    return (
      <div className="print-settings">
        <div className="print-warning">
          {text.pleaseWait}
        </div>
        <div className="instructions">
          {text.printNotes}
        </div>
        <div className="flex-wrapper">
          <div className="options">
            <div className="heading">{text.printOptions}</div>
            <div className="black-text">
              <label>
                <input
                  type="checkbox"
                  name="blackText"
                  value="black" // necessary for some reason for this to be a controlled component
                  checked={this.state.blackText}
                  onChange={this.handleInputChange} />
                {text.makeTextBlack}
              </label>
            </div>
            <div className="links">
              <label>
                <input
                  type="checkbox"
                  name="links"
                  value="inline"
                  checked={this.state.links}
                  onChange={this.handleInputChange} />
                {text.showLinks}
              </label>
            </div>
            <div className="page-breaks">
              <label>
                <input
                  type="checkbox"
                  name="pageBreaks"
                  value="section" // necessary for some reason for this to be a controlled component
                  checked={this.state.pageBreaks}
                  onChange={this.handleInputChange} />
                {text.pageBreaks}
              </label>
            </div>
            <div className="alt-media">
              <label>
                <input
                  type="checkbox"
                  name="useAltMedia"
                  value="alt"
                  checked={this.state.useAltMedia}
                  onChange={this.handleInputChange} />
                {text.useAltMedia}
              </label>
            </div>
          </div>
          <div className="section-numbers">
            <div className="heading">{text.printRange}</div>
            <div className="section-range">
              <label>
                {text.sectionStart}&nbsp;
                <input
                  type="textbox"
                  name="sectionStart"
                  value={this.state.sectionStart}
                  onChange={this.handleInputChange} />
              </label>
              <label>
                —
                <input
                  type="textbox"
                  name="sectionEnd"
                  value={this.state.sectionEnd}
                  onChange={this.handleInputChange} />
              </label>
              <button className="btn-apply btn btn-sm btn-primary" onClick={()=>this.prepUrlParamChange()}>{text.go}</button>
              <button className="btn-reset btn btn-link" onClick={()=>this.prepUrlParamReset()}>{text.reset}</button>
            </div>
          </div>
          <div className="print-btn-wrapper">
            <button className="btn print-btn btn-sm btn-primary" onClick={()=>window.print()}>
              {text.print}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PrintSettings;
