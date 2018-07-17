import { Component, Input } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';


@Component({
  selector: 'app-recipe-detail',
  styleUrls: [
    './recipe-detail.component.css'
  ],
  templateUrl: './recipe-detail.component.html'
})

export class RecipeDetailComponent {
  @Input() recipe: Recipe;

}
