import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IComment } from '../interfaces/comment';


const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  postComment(data: {}): Observable<IComment> {
    return this.http.post<IComment>(`${apiUrl}/comments`, data)
  }

  retrieveComments(threadId: string): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${apiUrl}/comments/thread/${threadId}/`)
  }

  editComment(threadId: number, data: {}): Observable<IComment> {
    return this.http.put<IComment>(`${apiUrl}/comments/${threadId}/`, data)
  }

  deleteComment(threadId: number): Observable<IComment> {
    return this.http.delete<IComment>(`${apiUrl}/comments/${threadId}/`)
  }
}
