import CheckedItem from './CheckedItem';

export default class AGOLCheckedItem extends CheckedItem {
  constructor(id, type) {
    super(id, type);

    this.layers = [];
  }
}
