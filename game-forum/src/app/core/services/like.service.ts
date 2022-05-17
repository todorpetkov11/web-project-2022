import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILike } from '../interfaces/like';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http: HttpClient) { }


  getLikesByProfileId(profileId: string): Observable<ILike[]> {
    return this.http.get<ILike[]>(`${apiUrl}/threads/?authorId=${profileId}`)
  }

  likeThread(threadId: string, userId: string): Observable<ILike> {
    const data = { threadId, userId }
    return this.http.post<ILike>(`${apiUrl}/likes/thread${threadId}`, data)
  }

  removeLike(likeId: string): Observable<ILike> {
    return this.http.delete<ILike>(`${apiUrl}/likes/${likeId}`)
  }
}
