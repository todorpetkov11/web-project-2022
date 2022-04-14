import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILike } from '../interfaces/like';
import { IThread } from '../interfaces/thread';

const apiUrl = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  constructor(private http: HttpClient) { }

  getAllThreads(): Observable<IThread[]> {
    return this.http.get<IThread[]>(`${apiUrl}/threads`)
  }

  getThreadById(threadId: string): Observable<IThread> {
    return this.http.get<IThread>(`${apiUrl}/threads/${threadId}`)
  }

  getThreadLikes(threadId: string): Observable<ILike[]> {
    return this.http.get<ILike[]>(`${apiUrl}/likes/?threadId=${threadId}`)
  }

  likeThread(data: { threadId: string, userId: string }): Observable<ILike> {
    return this.http.post<ILike>(`${apiUrl}/likes`, data)
  }
}
