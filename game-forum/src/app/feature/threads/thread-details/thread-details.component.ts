import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { ILike } from 'src/app/core/interfaces/like';
import { IThread } from 'src/app/core/interfaces/thread';
import { LikeService } from 'src/app/core/services/like.service';
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
  liked: boolean | ILike;
  saved: boolean = false
  thread: IThread;
  likes: ILike[];

  constructor(private threadService: ThreadService, private likeService: LikeService, private activatedRoute: ActivatedRoute, private userService: UserService) { }

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

      },
      complete: () => {
        this.liked = this.canLike()
      }
    })

  }

  public likeHandler(): void {
    let like = this.findLike()
    if (like) {
      const index = this.likes.indexOf(like)
      this.likes.splice(index, 1)
      this.likeService.removeLike(like.id).subscribe()

    }
    else {
      this.likeService.likeThread(this.thread.id, this.userService.currentUserId).subscribe({
        next: (like) => {
          this.likes.push(like)
        }
      })
    }

  }

  public onLikeClick(): void {
    this.likeHandler()
    this.liked = !this.liked
  }

  private findLike(): ILike | null {
    const userId = this.userService.currentUserId
    let likeToRemove: ILike | null = null;
    this.likes.forEach((like) => {
      if (like.userId === userId) {
        likeToRemove = like
      }
    })
    return likeToRemove
  }


  private canLike(): boolean {
    const userId = this.userService.currentUserId
    let likeable: boolean = true
    this.likes.forEach((like) => {
      if (like.userId === userId) {
        likeable = false
      }
    })
    return likeable
  }


  public onSaveClick(): void {
    this.saved = !this.saved
  }

}
