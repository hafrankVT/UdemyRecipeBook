import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Mac N Cheese', 'Mom\'s favorite Mac N Cheese',
      'https://images-gmi-pmc.edge-generalmills.com/c41ffe09-8520-4d29-9b4d-c1d63da3fae6.jpg'),
    new Recipe('Spicy Bourbon Chili', 'My Damn Fine Chili',
      'https://temeculablogs.com/wp-content/uploads/2017/01/instant-pot-chili-2-700x467.jpg'),
    new Recipe('Chili Mac N Cheese', 'The best of both worlds!',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/7/28/2/YW0812H_chili-mac_s4x3.jpg.' +
      'rend.hgtvcom.616.462.suffix/1479258280675.jpeg')

  ];

  constructor() { }

  ngOnInit() {
  }

}
