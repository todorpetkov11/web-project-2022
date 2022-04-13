import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, UserCredential } from '@angular/fire/auth';
import { from, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  currentUser: UserCredential | null = null;

  get isLogged() {
    return this.currentUser
  }

  constructor(private auth: Auth) { }

  login(loginData: { email: string, password: string }): Observable<UserCredential> {
    const loginPromise = signInWithEmailAndPassword(this.auth, loginData.email, loginData.password)
    return from(loginPromise).pipe(
      tap(user => this.currentUser = user)
    )
  }

  register(registerData: { email: string, password: string }): Observable<UserCredential> {
    const userCreationPromise = createUserWithEmailAndPassword(this.auth, registerData.email, registerData.password);
    return from(userCreationPromise);
  }

  logout() {
    this.currentUser = null;
    return signOut(this.auth)
  }
}