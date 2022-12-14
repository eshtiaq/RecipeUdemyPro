import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe [] =[
    new Recipe('Carrot Rice' , 'A delicious rice dish made with simple ingregiants...' , 'https://www.healthylittlefoodies.com/wp-content/uploads/2015/06/carrot-rice-paella.jpg'),
    new Recipe('Chicken Fries' , 'Breaded, crispy with perfect white meat chicken.' , 'https://api.time.com/wp-content/uploads/2014/08/chicken-fries-1.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
