import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/user';


const apiUrl = environment.apiUrl;

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

  get currentUser() {
    const user = localStorage.getItem('user')
    if (user) {
      return JSON.parse(user)
    }
  }

  get currentUserPfp() {
    const user = localStorage.getItem('user')
    if (user) {
      return JSON.parse(user).photoUrl
    }
  }

  get currentUserId() {
    const user = localStorage.getItem('user')
    if (user) {
      return JSON.parse(user).id
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
  }

  register(registerData: { username: string, email: string, password: string, photoUrl: string }): Observable<IUser> {
    return this.http.post<IUser>(`${apiUrl}/register`, registerData)
  }

  logout() {
    localStorage.removeItem('user')
    console.log(localStorage)
  }

  getProfile(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${apiUrl}/users/${id}`)
  }

  editProfile(userId: string, editData: { username: string, photoUrl: string }): Observable<IUser> {
    return this.http.put<IUser>(`${apiUrl}/users/${userId}`, editData)
  }

  deleteUser(): Observable<IUser> {
    return this.http.delete<IUser>(`${apiUrl}/users/${this.currentUserId}`)
  }
}