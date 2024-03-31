import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Dish } from './dish';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: Firestore) { }

  async addDish(dish: Dish) {
    const docRef = await addDoc(collection(this.firestore, 'dishes'), dish);
    console.log("Document written with ID: ", docRef.id);
  }
  getDishes() {
    const aCollection = collection(this.firestore, 'dishes')
    return collectionData(aCollection) as Observable<Dish[]>;
  }
}
