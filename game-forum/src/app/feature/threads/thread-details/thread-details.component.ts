import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { pipe } from 'rxjs';
import { ILike } from 'src/app/core/interfaces/like';
import { IThread } from 'src/app/core/interfaces/thread';
import { ThreadService } from 'src/app/core/services/thread.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-thread-details',
  templateUrl: './thread-details.component.html',
  styleUrls: ['./thread-details.component.css']
})
export class ThreadDetailsComponent implements OnInit {

  faHeart = faHeart
  faShare = faShare
  faReport = faCircleExclamation
  faPlus = faPlusCircle
  liked: boolean = false
  saved: boolean = false
  thread: IThread;
  likes: ILike[];

  constructor(private threadService: ThreadService, private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('threadId')
    this.threadService.getThreadById(id!).subscribe({
      next: (thread) => {
        this.thread = thread
      },
      error: (error) => {
        console.log(error)
      }
    })
    this.threadService.getThreadLikes(id!).subscribe({
      next: (likes) => {
        this.likes = likes
        console.log(this.likes)
      }
    })
  }

  public onLikeClick(): void {
    this.liked = !this.liked


  }

  public onSaveClick(): void {
    this.saved = !this.saved
  }

}
