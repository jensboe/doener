import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish } from '../dish';
import { NgFor, AsyncPipe, CurrencyPipe } from '@angular/common';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: true,
  imports: [NgFor, AsyncPipe, CurrencyPipe],
})
export class ListComponent implements OnInit {
  firestore = inject(FirestoreService);
  dishes$?: Observable<Dish[]>;

  ngOnInit(): void {
    this.dishes$ = this.firestore.getDishes();
  }
}
