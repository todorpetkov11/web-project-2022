import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from '../interfaces/comment';


const apiUrl = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  postComment(data: {}): Observable<IComment> {
    return this.http.post<IComment>(`${apiUrl}/comments`, data)
  }

  retrieveComments(threadId: string): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${apiUrl}/comments/?threadId=${threadId}`)
  }
}