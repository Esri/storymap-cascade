export default class Tab {
  constructor(params) {
    this.title = '';
    this.selectedClass = 'selected';

    this._isActive = false;
    this._options = params;
  }

  onChange() {
    this._onChange();
  }

  postCreate(params = {}) {
    if (! params.container || ! params.media || ! params.onChange || ! params.rootNode) {
      return;
    }

    this._isActive = true;

    this._node = params.container;
    this._media = params.media;
    this._onChange = params.onChange;
    this._onAction = params.onAction;
    this._rootNode = params.rootNode;
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
}
