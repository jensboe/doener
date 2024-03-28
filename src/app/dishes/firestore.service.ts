import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Dish } from './dish';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: Firestore) { }

  async addDish(dish: Dish) {
    const docRef = await addDoc(collection(this.firestore, 'dishes'), dish);
    console.log("Document written with ID: ", docRef.id);
  }
}
