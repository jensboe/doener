import { Component, inject } from '@angular/core';
import { Restaurant } from '../restaurant';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'restaurant-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  firestore: Firestore = inject(Firestore)
  restaurants$: Observable<Restaurant[]>;

  constructor() {
    const aCollection = collection(this.firestore, 'restaurants')
    this.restaurants$ = collectionData(aCollection) as Observable<Restaurant[]>;
  }
}
