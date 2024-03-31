import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
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
export class LoginComponent{
  public auth: AuthService = inject(AuthService);
  private router: Router = inject(Router)

  hide = true;
  email: string;
  password: string;

  constructor() {
    this.email ='';
    this.password ='';
  }

  login() {
    this.auth.login(this.email, this.password)
    .then(() => {
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
