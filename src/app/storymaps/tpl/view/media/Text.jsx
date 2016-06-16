import {} from 'lib-build/less!./Text';

// TODO extends Media
export default class Text {
  constructor(text) {
    this.type = 'text';
    this._text = text;
  }

  check(context) {
    if (! this._text || ! context) {
      console.log('Could not render text block in section');
      return false;
    }

    if (context.placement != 'block') {
      console.log('Could not render text block in section');
      return false;
    }

    return true;
  }

  render(context) {
    if (! this.check(context)) {
      return null;
    }

    return this._text.value;
  }

  postCreate() {
    //
  }

  update() {
    //
  }

  load() {
    //
  }

  performAction() {
    //
  }

  getArcGISContent() {
    return [];
  }

  getPreviewText() {
    return $(this._text.value).html();
  }
}
