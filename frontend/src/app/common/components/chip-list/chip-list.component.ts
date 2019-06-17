import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ChipListItem} from './chip-list-item';

@Component({
  selector: 'kub-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.css']
})
export class ChipListComponent {

  private selectedItem = new ChipListItem('', '')

  items: ChipListItem[] = [];

  @Input('items')
  set setItems(items: ChipListItem[]) {
    if (items) {
      this.items = items;
      if (items.length > 0) {
        this.selectedItem = items[0];
      }
    }
  }

  @Output()
  onItemSelect = new EventEmitter<ChipListItem>();


  selectItem(item: ChipListItem) {
    this.selectedItem = item;
    this.onItemSelect.emit(item);
  }

  getClassForItem(item: ChipListItem) {
    if (item === this.selectedItem) {
      return 'kub-selected-item';
    }
    return 'kub-non-selected-item';
  }
}
