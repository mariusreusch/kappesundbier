import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CreateRecipeResult } from '../create-recipe-result';
import { CreateRecipeResultState } from '../create-recipe-result-state';
import { Router } from '@angular/router';
import { Recipe } from '../recipe';
import { MatDialog, MatSnackBar } from '@angular/material';
import { YesNoDialogComponent } from '../../kub-common/yes-no-dialog/yes-no-dialog.component';
import { DeleteRecipeResultState } from '../delete-recipe-result-state';
import { DeleteRecipeResult } from '../delete-recipe-result';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'kub-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.css'],
  providers: [MatDialog, MatSnackBar]
})
export class RecipeOverviewComponent {

  @Input()
  myRecipes: Recipe[];

  @Output()
  onRecipeDelete = new EventEmitter<Recipe>();

  constructor(private router: Router, private dialog: MatDialog, private snackBar: MatSnackBar,
              private translate: TranslateService) {
  }

  @Input('createRecipeResult')
  set setCreateRecipeResult(createRecipeResult: CreateRecipeResult) {
    if (createRecipeResult && createRecipeResult.state === CreateRecipeResultState.SUCCESS) {
      this.myRecipes.push(createRecipeResult.createdRecipe)
    }
  }

  @Input('deleteRecipeResult')
  set setDeleteRecipeResult(deleteRecipeResult: DeleteRecipeResult) {
    if (deleteRecipeResult && deleteRecipeResult.state === DeleteRecipeResultState.SUCCESS) {
      this.myRecipes = this.myRecipes.filter(recipe => recipe.id !== deleteRecipeResult.deletedRecipeIdResponse.deletedRecipeId);
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

  onSelect(recipe: Recipe) {
    this.router.navigate(['/recipe-detail', recipe.id]);
  }

  onDelete(recipe: Recipe) {
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
}
