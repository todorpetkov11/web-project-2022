import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/core/interfaces/comment';
import { IUser } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-thread-comments-item',
  templateUrl: './thread-comments-item.component.html',
  styleUrls: ['./thread-comments-item.component.css']
})
export class ThreadCommentsItemComponent implements OnInit {

  constructor(private userService: UserService) { }

  @Input() comment: IComment;
  commenter: IUser;
  
  ngOnInit(): void {
     this.userService.getProfile(this.comment.user).subscribe({
       next: (user) => {
         this.commenter = user
       }
     })
  }

}
