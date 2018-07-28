import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice(); // returning a COPY of the ingredients array
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice()); // emitting a COPY of the ingredients array
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients); // adding the array with ingredients but with spread operator
    this.ingredientsChanged.next(this.ingredients.slice()); // emitting a COPY of the ingredients array
  }
}
