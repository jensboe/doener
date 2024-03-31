import { Component, OnInit, inject } from '@angular/core';
import { Restaurant } from '../restaurant';
import { Observable } from 'rxjs';
import { NgFor, AsyncPipe } from '@angular/common';
import { FirestoreService } from '../firestore.service';

@Component({
    selector: 'app-restaurant-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
    standalone: true,
    imports: [NgFor, AsyncPipe]
})
export class ListComponent implements OnInit{
  firestore = inject(FirestoreService)
  restaurants$?: Observable<Restaurant[]>;

  ngOnInit(): void {
    this.restaurants$ = this.firestore.getRestaurants()
  }
}
