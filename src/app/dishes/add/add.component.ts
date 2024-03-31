import { Component } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import { Dish } from '../dish';
import { MatButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import {
  MatFormField,
  MatLabel,
  MatHint,
  MatSuffix,
} from '@angular/material/form-field';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule,
    MatHint,
    MatSuffix,
    MatButton,
  ],
})
export class AddComponent {
  dish: Dish;

  constructor(public dataService: FirestoreService) {
    this.dish = {
      name: '',
      additionalText: '',
      price: 0,
      restaurantRef: '',
    };
  }
  addDish(dish: Dish) {
    this.dataService.addDish(dish);
  }
}
