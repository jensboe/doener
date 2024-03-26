import { Component } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RESTAURANTS } from '../mock.restaurants';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  restaurants: Restaurant[] = RESTAURANTS;
}
