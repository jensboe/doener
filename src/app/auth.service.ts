import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  async login(email: string, password: string) {
    await signInWithEmailAndPassword(this.auth, email, password);
  }

  logout()  {
    this.auth.signOut()
  }

}
