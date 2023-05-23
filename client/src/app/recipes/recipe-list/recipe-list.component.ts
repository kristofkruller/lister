import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test', 'This is a test', 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80%20870w'),
    new Recipe('B test', 'This is b test', 'https://images.unsplash.com/photo-1684769684160-5912ad3f9b14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=422&q=80 422w')
  ];
  constructor() {}

  onRecSelected(rec: Recipe) {
    this.recWasSelected.emit(rec)
  }
}
