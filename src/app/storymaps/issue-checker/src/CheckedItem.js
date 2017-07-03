export default class CheckedItem {
  constructor(id, type) {
    this.id = id;
    this.mediaType = type;
    this.errors = [];
    this.warnings = [];
    this.details = {};
  }
}
