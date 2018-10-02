import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'kub-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  @Input()
  categories: string[] = [];

  @Output()
  onCategorySelect = new EventEmitter<string>();

  onCategorySelected(category: string) {
    this.onCategorySelect.emit(category);
  }
}
