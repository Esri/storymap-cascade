import React from 'react';
import ReactDOM from 'react-dom';
import {} from 'lib-build/less!./SidePanelGooglePhotos';
import Helper from '../../utils/Helper';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';

var text = i18n.builder.mediaPicker.browsePanel.sidePanel.googlePhotos;

class UserSearchAlert extends React.Component {
  render() {
    var style = {
      display: this.props.display ? 'block' : 'none'
    };
    var msg = Helper.mixinString(text.cannotFindUser, 'username', this.props.triedUser);

    return (
      <div className="alert alert-danger" role="alert" style={style}>
        <span>{msg}</span>
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

class SidePanelGooglePhotos extends React.Component {

  getHelpSpans() {
    let splitArr = text.helpText.split(/\$\{(.+?)\}/);
    return splitArr.map((str, i) => {
      const reactKey = 'googlehelp-' + i;
      let spanStr = str;
      if (str === 'helpLinkText') {
        return (
          <a key={reactKey} href={app.cfg.BUILDER_LINKS.picasaHelp} target="_blank"><strong>{text.helpLinkText}</strong></a>
        );
      }
      if (str === 'Picasa' || str === 'Google+') {
        return (
          <span key={reactKey}><strong>{spanStr}</strong></span>
        );
      }
      return (
        <span key={reactKey}>{spanStr}</span>
      );
    });
  }

  render() {
    var msgDisplay = this.props.containerState.userErrorType !== '';
    var placeholder = Helper.unescapeBrands(text.placeholder);

    return (
      <div className="mp-sidepanel google">
        <SearchInput
          icon="picture-o"
          placeholder={placeholder}
          value={this.props.containerState.searchValue}
          onChange={this.props.onChange}
          onKeyPress={this.props.onKeyPress}
          onClear={this.props.onClear}
          setFocus={this.props.containerState.focusInput}
        />
        <UserSearchAlert
          display={msgDisplay}
          status={this.props.containerState.userErrorType}
          triedUser={this.props.containerState.searchValue}
        />
        <div className="help-text">
          {this.getHelpSpans()}
          <div className="small-text">
            <span>{i18n.builder.mediaPicker.browsePanel.sidePanel.thirdPartyTerms}</span>
            <a className="link" target="_blank" rel="noopener noreferrer" href={app.cfg.BUILDER_LINKS.TERMS.google}>Google</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SidePanelGooglePhotos;
