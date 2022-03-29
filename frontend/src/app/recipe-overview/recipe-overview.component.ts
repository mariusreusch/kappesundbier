import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe-management/recipe';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { zip } from 'rxjs';
import { ChipListItem } from '../common/components/chip-list/chip-list-item';

@Component({
  selector: 'kub-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.css'],
  providers: [MatDialog, MatSnackBar]
})
export class RecipeOverviewComponent {

  @Input()
  recipes: Recipe[] | null;
  @Output()
  onRecipeSelect = new EventEmitter<Recipe>();
  @Output()
  onCategorySelect = new EventEmitter<string>();

  chipItems: ChipListItem[] = [];
  currentView: ChipListItem;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar,
              private translate: TranslateService) {
    zip(translate.get('Recipe.Recipes'), translate.get('Recipe.Categories'))
      .subscribe(translations => {
        this.chipItems = [new ChipListItem('recipes', translations[0]), new ChipListItem('categories', translations[1])];
        this.currentView = this.chipItems[0];
      });
  }

  onRecipeSelected(recipe: Recipe) {
    this.onRecipeSelect.emit(recipe);
  }

  selectView(item: ChipListItem) {
    this.currentView = item;
  }

  getAllRecipeCategories(): string[] {
    const categories: string[] = [];
    for (const recipe of this.recipes!) {
      categories.push(...recipe.categories);
    }
    return Array.from(new Set(categories));
  }

  onCategorySelected(category: string) {
    this.onCategorySelect.emit(category);
  }
}
