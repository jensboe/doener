import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Dish } from '../dish';
import { Restaurant } from '../../restaurants/restaurant';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  firestore: Firestore = inject(Firestore)
  dishes$: Observable<Dish[]>;

  constructor() {
    const aCollection = collection(this.firestore, 'dishes')
    this.dishes$ = collectionData(aCollection) as Observable<Dish[]>;
  }
}