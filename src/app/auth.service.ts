import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { updateProfile } from '@firebase/auth';
import { BehaviorSubject,  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = new BehaviorSubject<boolean>(false);
  loggedOut = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();
  loggedOut$ = this.loggedOut.asObservable();


  constructor(private auth: Auth) {
    this.auth.onAuthStateChanged((user) => {
      if(user) {
        this.loggedIn.next(true)
        this.loggedOut.next(false)
      }
      else
      {
        this.loggedOut.next(true)
        this.loggedIn.next(false)
      }
    })
  }
  get currentUser() {
    return this.auth.currentUser
  }

  async login(email: string, password: string) {
    await signInWithEmailAndPassword(this.auth, email, password);
  }

  async register(email: string, password: string, displayname: string) {
    await createUserWithEmailAndPassword(getAuth(), email, password)
    .then((userCredential) => {
      updateProfile(userCredential.user,{displayName: displayname})
        this.login(email, password)
    })
    .catch((err) => {
      console.log(err.code);
      console.log(err.message);
    })
  }

  logout()  {
    this.auth.signOut()
  }

}
