import React from 'react';
import ReactDOM from 'react-dom';
import Helper from '../../utils/Helper';
import FileUploader from './FileUploader/FileUploader';

import {} from 'lib-build/less!./SidePanelArcGIS';
import constants from '../../constants';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

import topic from 'dojo/topic';

var text = i18n.builder.mediaPicker.browsePanel.sidePanel.agol;

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
    return (
      <div className="input-group search">
        <div className="input-group-addon">
            <span className={'fa fa-' + this.props.icon} />
        </div>
        <input
          ref="textInput"
          tabIndex="2"
          type="text"
          disabled={this.props.disabled}
          value={this.props.value}
          className="form-control"
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          onKeyPress={this.props.onKeyPress} />
        <div
          tabIndex={this.props.disabled ? null : (this.props.value ? '2' : null)}
          className="btn danger input-group-addon"
          style={this.props.value ? null : {display: 'none'}}
          onClick={this.props.value ? (evt) => this.props.onClear(Object.assign({}, evt, {charCode: 13})) : null}
          onKeyPress={this.props.onClear}
          disabled={this.props.disabled} >
          <span className="fa fa-remove" />
        </div>
        <div
          tabIndex={this.props.disabled ? null : '2'}
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

class LocationToggle extends React.Component {
  render() {
    const labelClasses = Helper.classnames(['btn', 'btn-gray', {
      'col-xs-3': this.props.toggleCount === 4,
      'col-xs-4': this.props.toggleCount === 3,
      'active': this.props.checked,
      'disabled': this.props.isDisabled
    }]);

    return (
      <label
        tabIndex={this.props.isDisabled ? null : '1'}
        className={labelClasses}
        htmlFor={this.props.id}
        onKeyPress={this.props.onClick}
        onClick={this.props.onClick} >
        <span className="btn-label">{this.props.label}</span>
        <input
          disabled={this.props.isDisabled}
          onChange={this.props.onClick}
          checked={this.props.checked}
          type="radio"
          name="searchLocation"
          value={this.props.value}
          id={this.props.id} />
      </label>
    );
  }
}

class LocationToggles extends React.Component {

  thisOnClick(evt, val) {
    if (val === this.props.searchLocation || $(evt.target).closest('.btn.disabled').length || (evt.charCode && evt.charCode !== 13)) {
      return;
    }
    this.props.onChange({type: val});
  }

  isSelected(loc) {
    return this.props.searchLocation === constants.searchLocation[loc];
  }

  isDisabled() {
    return (
      this.props.availableContentTypes.indexOf(constants.contentType.WEBMAP) < 0 &&
      this.props.availableContentTypes.indexOf(constants.contentType.WEBSCENE) < 0
    );
  }

  getOrgToggle() {
    if (!this.props.portalIsOrg) {
      return null;
    }
    return (
      <LocationToggle
        id="agol-org"
        toggleCount={4}
        isDisabled={this.isDisabled()}
        onClick={(evt) => this.thisOnClick(evt, constants.searchLocation.ORG)}
        label={Helper.mixinString(text.searchLocation.myOrg, 'orgname', this.props.portalName)}
        value={constants.searchLocation.ORG}
        checked={this.isSelected('ORG')}
      />
    );
  }

  render() {
    return (
      <div className="content-toggle btn-group" data-toggle="buttons">
        <LocationToggle
          id="agol-agol"
          toggleCount={this.props.portalIsOrg ? 4 : 3}
          isDisabled={this.isDisabled()}
          onClick={(evt) => this.thisOnClick(evt, constants.searchLocation.AGOL)}
          label={text.searchLocation.agol}
          value={constants.searchLocation.AGOL}
          checked={this.isSelected('AGOL')}
        />
        { this.getOrgToggle() }
        <LocationToggle
          id="agol-mine"
          toggleCount={this.props.portalIsOrg ? 4 : 3}
          isDisabled={this.isDisabled()}
          onClick={(evt) => this.thisOnClick(evt, constants.searchLocation.MINE)}
          label={text.searchLocation.myContent}
          value={constants.searchLocation.MINE}
          checked={this.isSelected('MINE')}
        />
        <LocationToggle
          id="agol-story"
          toggleCount={this.props.portalIsOrg ? 4 : 3}
          onClick={(evt) => this.thisOnClick(evt, constants.searchLocation.STORY)}
          label={text.searchLocation.thisStory}
          value={constants.searchLocation.STORY}
          checked={this.isSelected('STORY')}
        />
      </div>
    );
  }
}

class ActionButton extends React.Component {
  render() {
    const combinedClasses = Helper.classnames([this.props.startingClasses,'btn']);
    return (
      <button
        className={combinedClasses}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}

class Divider extends React.Component {
  render() {
    return (
      <div className="divider">
        <span>{text.createContent.or}</span>
      </div>
    );
  }
}

class CreateMapDivider extends React.Component {
  render() {
    return (
      this.props.mapEditorAvailable ? <Divider /> : null
    );
  }
}

class CreateMapButton extends React.Component {
  launchMapEditor() {
    // dismiss the media picker modal to open the map editor one
    topic.publish('MEDIA-PICKER-SWAP-MAP-EDITOR');
  }

  render() {
    return (
      this.props.mapEditorAvailable ? <ActionButton
        startingClasses="btn-bw inverse create-map-button"
        text={text.createContent.createNewMap}
        onClick={this.launchMapEditor}
      /> : null
    );
  }
}

class SidePanelArcGIS extends React.Component {
  render() {
    const mapEditorAvailable = !app.isSelfHosted && this.props.containerState.availableContentTypes.indexOf(constants.contentType.WEBMAP) !== -1;

    return (
      <div className="mp-sidepanel agol">
        <LocationToggles
          availableContentTypes={this.props.containerState.availableContentTypes}
          portalIsOrg={this.props.containerState.portalIsOrg}
          portalName={this.props.containerState.portalName}
          searchLocation={this.props.providerProps.searchLocation}
          onChange={this.props.onKeyPress.searchLocSubmit}
        />
        <SearchInput
          setFocus={this.props.containerState.focusInput}
          icon="globe"
          placeholder={text.filterAndSort.search}
          value={this.props.containerState.textInputValue}
          loading={this.props.imageLoading}
          onChange={this.props.onChange.textInput}
          onKeyPress={this.props.onKeyPress.textKeypress}
          onClear={this.props.onKeyPress.textClear}
        />
        <Divider />
        <CreateMapButton
          mapEditorAvailable={mapEditorAvailable}
        />
        <CreateMapDivider
          mapEditorAvailable={mapEditorAvailable}
        />
        <FileUploader
          authorizedMedia={this.props.containerState.authorizedMedia}
          availableContentTypes={this.props.containerState.availableContentTypes}
          appId={this.props.containerState.appId}
          fileUploadFunctions={this.props.onKeyPress.fileUploadFunctions}
        />
      </div>
    );
  }
}

export default SidePanelArcGIS;
