import { Component, Input } from '@angular/core';

@Component({
  selector: 'kub-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  @Input()
  categories: string[] = [];

  onSelect(kcategory: string) {
    // TODO implement routing to view that shows all recipes of this category
  }
}
