import { Component } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Dish } from '../dish';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  dish: Dish;

  constructor(public dataService: FirestoreService) {
    this.dish = {
      name: '',
      additionalText: '',
      price: 0,
      restaurantRef: ''
    }
  }
  addDish(dish: Dish) {
    this.dataService.addDish(dish);
  }
}
