import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { IProfile } from '../interfaces/profile';
import { IUser } from '../interfaces/user';


const apiUrl = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})

export class UserService {

  get isLogged() {
    return localStorage.getItem('user')
  }
  
  get currentUserId() {
    const user = localStorage.getItem('user')
    return JSON.parse(user!).profileId
  }

  constructor(private http: HttpClient) { }

  login(loginData: { email: string, password: string }): Observable<IUser> {
    return this.http.post<IUser>(`${apiUrl}/login`, loginData)
    .pipe(
      tap(user => localStorage.setItem("user", JSON.stringify(user.user)))
    )
  }

  register(registerData: { username: string, email: string, password: string }): Observable<IUser> {
    return this.http.post<IUser>(`${apiUrl}/register`, registerData)
  }

  logout() {
    localStorage.removeItem('user')
  }


  getProfile(profileId: string): Observable<IProfile> {
    return this.http.get<IProfile>(`${apiUrl}/profiles/${profileId}`)
  }
}