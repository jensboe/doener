import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password);
  }

  logout()  {
    this.auth.signOut()
  }

  async isLoggedin() {
    return !! await this.auth.currentUser
  }
}
