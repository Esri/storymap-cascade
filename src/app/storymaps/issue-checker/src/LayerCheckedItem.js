import CheckedItem from './CheckedItem';

export default class LayerCheckedItem extends CheckedItem {
  constructor(id) {
    super(id, 'layer');

    this.maps = [];
  }
}
