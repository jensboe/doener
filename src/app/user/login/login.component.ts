import { CommonModule } from '@angular/common';
import { Component, OnDestroy, inject } from '@angular/core';
import { AuthModule, Auth, User, user, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy{
  private auth: AuthService = inject(AuthService);
  private router: Router = inject(Router)

  hide = true;
  email: string;
  password: string;

  constructor() {
    this.email ='';
    this.password ='';
  }


  ngOnDestroy() {

  }
  login() {
    this.auth.login(this.email, this.password)
    .then((bla) => {
      this.router.navigate(['restaurants/list'])
    })
    .catch(err => {
      console.log(err.code);
      console.log(err.message);
    })

  }
  logout() {
    this.auth.logout()
  }
}
