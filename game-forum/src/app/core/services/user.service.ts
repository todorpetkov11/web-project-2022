import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IUser } from '../interfaces/user';


const apiUrl = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})

export class UserService {

  get isLogged() {
    if (localStorage.getItem('user')) {
      return true
    }
    return false
  }


  get currentUserPfp() {
    const user = localStorage.getItem('user')
    if (user) {
      return JSON.parse(user!).photoUrl
    }
  }

  get currentUserId() {
    const user = localStorage.getItem('user')
    if (user) {
      return JSON.parse(user!).id
    }

  }

  get currentUserUsername() {
    const user = localStorage.getItem('user')
    if (user) {
      return JSON.parse(user!).username
    }

  }

  constructor(private http: HttpClient) { }

  login(loginData: { email: string, password: string }): Observable<IUser> {
    return this.http.post<IUser>(`${apiUrl}/login`, loginData)
      .pipe(
        tap(user => localStorage.setItem("user", JSON.stringify(user.user)))
      )
  }

  register(registerData: { username: string, email: string, password: string, photoUrl: string }): Observable<IUser> {
    return this.http.post<IUser>(`${apiUrl}/register`, registerData)
  }

  logout() {
    localStorage.removeItem('user')
    console.log(localStorage)
  }

  getProfile(userId: string): Observable<IUser> {
    return this.http.get<IUser>(`${apiUrl}/users/${userId}`)
  }

  editProfile(userId: string, editData: { username: string, }): Observable<IUser> {
    return this.http.put<IUser>(`${apiUrl}/users/${userId}`, editData)
  }

  deleteUser(): Observable<IUser> {


    return this.http.delete<IUser>(`${apiUrl}/users/${this.currentUserId}`)
  }
}