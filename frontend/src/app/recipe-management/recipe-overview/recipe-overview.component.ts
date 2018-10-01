import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../recipe';
import { MatDialog, MatSnackBar } from '@angular/material';
import { YesNoDialogComponent } from '../../kub-common/yes-no-dialog/yes-no-dialog.component';
import { DeleteRecipeResult } from '../delete-recipe-result';
import { TranslateService } from '@ngx-translate/core';
import { ResponseResultState } from '../response-result-state';
import { zip } from 'rxjs';
import { ChipListItem } from '../../kub-common/chip-list/chip-list-item';
import { User } from '../../authentication/user';

@Component({
  selector: 'kub-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.css'],
  providers: [MatDialog, MatSnackBar]
})
export class RecipeOverviewComponent {

  @Input()
  recipes: Recipe[];

  @Output()
  onRecipeDelete = new EventEmitter<Recipe>();

  chipItems: ChipListItem[] = [];
  currentView: ChipListItem;

  @Input()
  user: User;

  @Input('deleteRecipeResult')
  set setDeleteRecipeResult(deleteRecipeResult: DeleteRecipeResult) {
    if (deleteRecipeResult && deleteRecipeResult.state === ResponseResultState.SUCCESS) {
      this.recipes = this.recipes.filter(recipe => recipe.id !== deleteRecipeResult.deletedRecipeIdResponse.deletedRecipeId);
      // TODO: find a proper solution (instead of set timeout). Problem: https://github.com/angular/angular/issues/10762
      setTimeout(() => {
        this.translate.get('Recipe.DeleteRecipe').subscribe(text => {
          this.snackBar.open(text, null, {
            duration: 4000,
          });
        });
      }, 1);
    }
  }

  constructor(private router: Router, private dialog: MatDialog, private snackBar: MatSnackBar,
              private translate: TranslateService) {
    zip(translate.get('Recipe.Recipes'), translate.get('Recipe.Categories'))
      .subscribe(translations => {
        this.chipItems = [new ChipListItem('recipes', translations[0]), new ChipListItem('categories', translations[1])];
        this.currentView = this.chipItems[0];
      });
  }

  onRecipeSelect(recipe: Recipe) {
    this.router.navigate(['view-recipe', recipe.id]);
  }

  onRecipeDeleted(recipe: Recipe) {
    const dialogRef = this.dialog.open(YesNoDialogComponent, {
      data: {
        question: 'Biste sicher?',
        title: 'Rezept löschen'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.onRecipeDelete.emit(recipe);
      }
    });
  }

  selectView(item: ChipListItem) {
    this.currentView = item;
  }

  getAllRecipeCategories(): string[] {
    const categories: string[] = [];
    for (const recipe of this.recipes) {
      categories.push(...recipe.categories);
    }
    return Array.from(new Set(categories));
  }
}
