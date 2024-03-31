import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { BehaviorSubject,  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();

  constructor(private auth: Auth) {
    this.auth.onAuthStateChanged((user) => {
      if(user) {
        this.loggedIn.next(true)
      }
      else
      {
        this.loggedIn.next(false)
      }
    })
  }

  async login(email: string, password: string) {
    await signInWithEmailAndPassword(this.auth, email, password);
  }

  logout()  {
    this.auth.signOut()
  }

}
