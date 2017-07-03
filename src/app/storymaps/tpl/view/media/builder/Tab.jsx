export default class Tab {
  constructor(params = {}) {
    this.title = '';
    this.selectedClass = 'selected';
    this.hasBeenRendered = false;

    this._isActive = false;
    this._options = params;
    this._sectionOptions = params.sectionOptions;
    this._onSectionChange = params.onSectionChange;
    this._onOpen = params.onOpen;
    this.showErrors = params.showErrors;
    this.showWarnings = params.showWarnings;
  }

  onChange() {
    this._onChange();
  }

  postCreate(params = {}) {
    if (! params.container || ! params.media || ! params.onChange || ! params.rootNode) {
      return;
    }

    if (this._onOpen) {
      this._onOpen();
    }

    this._isActive = true;
    this.hasBeenRendered = true;

    this._node = params.container;
    this._media = params.media;
    this._onChange = params.onChange;
    this._onAction = params.onAction;
    this._rootNode = params.rootNode;
  }

  beforePanelDestroy() {

  }

  destroy() {
    this._isActive = false;
  }

  setConfig(name, value) {
    this._media.options[name] = value;
    this.onChange();
  }

  setMedia(name, value) {
    this._media[name] = value;
    this.onChange();
  }

  setSectionConfig(name, value) {
    this._sectionOptions[name] = value;
    this._onSectionChange();
  }
}
