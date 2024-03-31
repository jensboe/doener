import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../auth.service';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  private auth = inject(AuthService);
  user?: User | null;

  ngOnInit(): void {
    this.user = this.auth.currentUser
  }
}
