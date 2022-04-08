import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-thread-details',
  templateUrl: './thread-details.component.html',
  styleUrls: ['./thread-details.component.css']
})
export class ThreadDetailsComponent {

  faHeart = faHeart
  faShare = faShare
  faReport = faCircleExclamation
  faPlus = faPlusCircle
  liked: boolean = false
  saved: boolean = false

  constructor() { }

  public onLikeClick(): void {
    this.liked = !this.liked
  }

  public onSaveClick(): void {
    this.saved = !this.saved
  }

}
