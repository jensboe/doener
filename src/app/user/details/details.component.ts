import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  private auth: Auth = inject(Auth);
  user$ = user(this.auth);
}
