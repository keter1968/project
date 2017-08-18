import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService} from '../shopping-list/shopping-list.service'

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe', 'This is simply test', 
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg', 
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Another test Recipe', 
      'This is simply test', 
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg', 
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}