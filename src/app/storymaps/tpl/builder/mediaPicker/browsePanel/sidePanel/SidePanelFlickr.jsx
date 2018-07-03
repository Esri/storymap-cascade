import React from 'react';
import ReactDOM from 'react-dom';
import {} from 'lib-build/less!./SidePanelFlickr';
import constants from '../../constants';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';
import Helper from '../../utils/Helper';

var text = i18n.builder.mediaPicker.browsePanel.sidePanel.flickr;

class TypeToggle extends React.Component {

  thisOnClick(evt) {
    var val = $(evt.currentTarget).find('input').val();
    if (val === this.props.selectedTab) {
      return;
    }
    this.props.onChange({type: val});
  }

  isSelected(thisType) {
    return this.props.selectedTab === constants.searchType[thisType];
  }

  render() {
    return (
      <div className="type-toggle btn-group" data-toggle="buttons">
        <label
          className={'btn btn-gray' + (this.isSelected('TEXT') ? ' active' : '')}
          htmlFor="flickr-text"
          onClick={(evt) => this.thisOnClick(evt)}>{this.props.textLabel}
          <input
            onChange={(evt) => this.thisOnClick(evt)}
            type="radio"
            name="searchType"
            value={constants.searchType.TEXT}
            id="flickr-text"
            checked={this.isSelected('TEXT')} />
        </label>

        <label
          className={'btn btn-gray' + (this.isSelected('USER') ? ' active' : '')}
          htmlFor="flickr-user"
          onClick={(evt) => this.thisOnClick(evt)}>{this.props.userLabel}
          <input
            onChange={(evt) => this.thisOnClick(evt)}
            type="radio"
            name="searchType"
            id="flickr-user"
            value={constants.searchType.USER}
            checked={this.isSelected('USER')} />
        </label>
      </div>
    );
  }
}

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

class LicenseSearch extends React.Component {

  getOptions() {
    var options = [
      <option
        value={constants.flickrLicenseStrings.PUBLIC_DOMAIN}
        key={constants.flickrLicenseStrings.PUBLIC_DOMAIN} >
          {text.licenses.public}</option>,
      <option
        value={constants.flickrLicenseStrings.COMMERCIAL}
        key={constants.flickrLicenseStrings.COMMERCIAL} >
          {text.licenses.commercial}</option>,
      <option
        value={constants.flickrLicenseStrings.NON_COMMERCIAL}
        key={constants.flickrLicenseStrings.NON_COMMERCIAL} >
          {text.licenses.nonCommercial}</option>
    ];
    if (this.props.searchType === constants.searchType.USER) {
      options.push(
        <option
          value={constants.flickrLicenseStrings.ANY}
          key={constants.flickrLicenseStrings.ANY} >
            {text.licenses.any}</option>
      );
    }
    return options;
  }

  render() {
    return (
      <div className={'license-group form-group' + (this.props.disabled ? ' disabled' : '')}>
        <label htmlFor={this.props.searchType + '-license'}>{text.licenses.licenseLabel}</label>
        <select
          id={this.props.searchType + '-license'}
          onChange={this.props.onChange}
          disabled={this.props.disabled}
          className="license form-control"
          defaultValue={this.props.license} >
            {this.getOptions()}
        </select>
      </div>
    );
  }

}

class UserSearchAlert extends React.Component {
  render() {
    var style = {
      display: this.props.display ? 'block' : 'none'
    };
    var msg;
    switch (this.props.status) {
      case constants.userFetchError.NO_USER:
      case constants.userFetchError.ERROR:
        msg = Helper.mixinString(text.errors.cannotFindUser, 'username', this.props.triedUser);
        break;
      case constants.userFetchError.NO_PHOTOS:
        msg = Helper.mixinString(text.errors.noUserPhotos, 'username', this.props.triedUser);
        break;
      default:
        msg = Helper.mixinString(text.errors.generalUserError, 'username', this.props.triedUser);
    }
    var altUser = this.props.altUsername;
    if (this.props.altNSID) {
      altUser += ' (' + this.props.altNSID + ')';
    }

    if (this.props.altUsername) {
      let splitArr = text.errors.didYouMean.split(/\$\{(.+?)\}/);
      let divArr = splitArr.map((str, i) => {
        const reactKey = 'didyoumean-' + i;
        let spanStr = str;
        if (str === 'username') {
          return (
            <a key={reactKey}
               href="#"
               className="alert-link"
               onClick={this.props.tryDifferentUser}>
               {altUser}
            </a>
          );
        }
        return (
          <span key={reactKey}>{spanStr}</span>
        );
      });

      return (
        <div className="alert alert-danger" role="alert" style={style}>
          <span>{msg}&nbsp;</span>
          <div style={{display: 'inline'}}>
            {divArr}
          </div>
        </div>
      );
    }
    return (
      <div className="alert alert-danger" role="alert" style={style}>
        <span>{msg}&nbsp;</span>
      </div>
    );
  }
}

class UserSearch extends React.Component {

  render() {
    var style = {
      display: this.props.display ? 'block' : 'none'
    };
    var msgDisplay = this.props.containerState.userErrorType !== '';
    return (
      <div style={style}>
        <SearchInput
          icon="user"
          setFocus={this.props.containerState.focusUserNameInput && this.props.disable.textSearch}
          value={this.props.containerState.userNameInputValue}
          placeholder={text.placeholders.user}
          loading={this.props.albumLoading}
          onChange={this.props.onChange.userNameInput}
          onKeyPress={this.props.onKeyPress.userNameKeypress}
          onClear={this.props.onKeyPress.userNameClear}
        />
        <UserSearchAlert
          display={msgDisplay}
          triedUser={this.props.containerState.userNameInputValue}
          status={this.props.containerState.userErrorType}
          altUsername={this.props.containerState.altUsername}
          altNSID={this.props.containerState.altNSID}
          tryDifferentUser={this.props.onKeyPress.tryDifferentUser}
        />
        <SearchInput
          icon="picture-o"
          setFocus={this.props.containerState.focusUserTextInput && !this.props.disable.textSearch}
          disabled={this.props.disable.textSearch}
          placeholder={text.placeholders.userText}
          value={this.props.containerState.userTextInputValue}
          loading={this.props.imageLoading}
          onChange={this.props.onChange.userTextInput}
          onKeyPress={this.props.onKeyPress.userTextKeypress}
          onClear={this.props.onKeyPress.userTextClear}
        />
        <LicenseSearch
          disabled={this.props.disable.licenseSearch}
          onChange={this.props.onKeyPress.userLicenseChange}
          searchType={constants.searchType.USER}
          license={this.props.license}
        />
      </div>
    );
  }

}

class TextSearch extends React.Component {

  render() {
    var style = {
      display: this.props.display ? 'block' : 'none'
    };
    return (
      <div style={style}>
        <SearchInput
          icon="picture-o"
          setFocus={this.props.containerState.focusTextInput}
          placeholder={text.placeholders.text}
          value={this.props.containerState.textInputValue}
          loading={this.props.imageLoading}
          onChange={this.props.onChange.textInput}
          onKeyPress={this.props.onKeyPress.textKeypress}
          onClear={this.props.onKeyPress.textClear}
        />
        <LicenseSearch
          onChange={this.props.onKeyPress.photoLicenseChange}
          searchType={constants.searchType.TEXT}
          license={this.props.license}
        />
      </div>
    );
  }

}

class SidePanelFlickr extends React.Component {

  render() {
    var userDisplay = this.props.providerProps.selectedTab === constants.searchType.USER ? true : false;
    var textDisplay = this.props.providerProps.selectedTab === constants.searchType.TEXT ? true : false;

    // tried doing this in flickrContainer file, but depended on either actions that were happening in common or on redux state.
    var disableUserTextSearch = (!this.props.providerProps.userName || this.props.providerProps.userName.trim().toLowerCase() !== this.props.containerState.userNameInputValue.trim().toLowerCase());
    var disableUserLicenseSearch = disableUserTextSearch || (this.props.providerProps.userSearchTerm === '' || this.props.providerProps.userSearchTerm !== this.props.containerState.userTextInputValue);

    return (
      <div className="mp-sidepanel flickr">
        <TypeToggle
          textLabel={Helper.unescapeBrands(text.searchType.text)}
          userLabel={Helper.unescapeBrands(text.searchType.account)}
          selectedTab={this.props.providerProps.selectedTab}
          onChange={this.props.onKeyPress.searchType} />
        <UserSearch
          albumLoading={this.props.providerProps.albumFetchStatus === constants.fetchStatus.FETCHING}
          imageLoading={this.props.providerProps.imageFetchStatus === constants.fetchStatus.FETCHING && this.props.providerProps.userSearchTerm}
          userError={this.props.containerState.userErrorType}
          display={userDisplay}
          disable={{textSearch: disableUserTextSearch, licenseSearch: disableUserLicenseSearch}}
          license={this.props.providerProps.userLicense}
          onChange={this.props.onChange}
          onKeyPress={this.props.onKeyPress}
          containerState={this.props.containerState} />
        <TextSearch
          imageLoading={this.props.providerProps.imageFetchStatus === constants.fetchStatus.FETCHING}
          display={textDisplay}
          license={this.props.providerProps.photoLicense}
          onChange={this.props.onChange}
          onKeyPress={this.props.onKeyPress}
          containerState={this.props.containerState} />
        <div className="small-text text-margins">
          <span>{i18n.builder.mediaPicker.browsePanel.sidePanel.thirdPartyTerms}</span>
          <a className="link" target="_blank" rel="noopener noreferrer" href={app.cfg.BUILDER_LINKS.TERMS.flickr}>Flickr</a>
        </div>
      </div>
    );

  }

}

export default SidePanelFlickr;
