import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: Firestore) { }

  getRestaurants() {
    const aCollection = collection(this.firestore, 'restaurants')
    return collectionData(aCollection) as Observable<Restaurant[]>;
  }
}
