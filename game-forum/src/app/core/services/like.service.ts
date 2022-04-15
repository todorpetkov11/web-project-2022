import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILike } from '../interfaces/like';
import { IThread } from '../interfaces/thread';

const apiUrl = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http: HttpClient) { }


  getLikesByProfileId(profileId: string): Observable<IThread[]> {
    return this.http.get<IThread[]>(`${apiUrl}/threads/?authorId=${profileId}`)
  }

  likeThread(threadId: string, userId: string): Observable<ILike> {
    const data = { threadId, userId }
    return this.http.post<ILike>(`${apiUrl}/likes`, data)
  }

  removeLike(likeId: string): Observable<ILike> {
    return this.http.delete<ILike>(`${apiUrl}/likes/${likeId}`)
  }
}
