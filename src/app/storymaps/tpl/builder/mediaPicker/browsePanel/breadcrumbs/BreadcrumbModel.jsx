export default class {
  constructor(title, link, displayedContent) {
    this.id = title + '-' + link;
    this.title = title;
    this.link = link;
    this.active = this.link === displayedContent;
  }
}
