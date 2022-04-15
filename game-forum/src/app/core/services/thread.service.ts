import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
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

  getThreadsByProfileId(profileId: string): Observable<IThread[]> {
    return this.http.get<IThread[]>(`${apiUrl}/threads/?authorId=${profileId}`)
  }

  getThreadsWithParams(searchBy: string, param: string): Observable<IThread[]> {
    return this.http.get<IThread[]>(`${apiUrl}/threads/?${searchBy}=${param}`)
  }

  getThreadLikes(threadId: string): Observable<ILike[]> {
    return this.http.get<ILike[]>(`${apiUrl}/likes/?threadId=${threadId}`)
  }

  createThread(threadData: {}): Observable<IThread> {
    return this.http.post<IThread>(`${apiUrl}/threads`, threadData)
  }

  deleteThread(threadId: string): Observable<IThread> {
    return this.http.delete<IThread>(`${apiUrl}/threads/${threadId}`)
  }

}
