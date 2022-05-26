import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faRemove, faEdit } from '@fortawesome/free-solid-svg-icons';
import { IComment } from 'src/app/core/interfaces/comment';
import { IUser } from 'src/app/core/interfaces/user';
import { CommentService } from 'src/app/core/services/comment.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-thread-comments-item',
  templateUrl: './thread-comments-item.component.html',
  styleUrls: ['./thread-comments-item.component.css']
})
export class ThreadCommentsItemComponent implements OnInit {

  faRemove = faRemove
  faEdit = faEdit

  constructor(private userService: UserService, private fb: FormBuilder, private commentService: CommentService) { }

  @Input() comment: IComment;
  @Output() delete: EventEmitter<IComment> = new EventEmitter()
  commenter: IUser;
  admin: boolean = true;
  editMode: boolean = false;

  ngOnInit(): void {
    this.userService.getProfile(this.comment.user).subscribe({
      next: (user) => {
        this.commenter = user
      }
    })
  }

  form: FormGroup = this.fb.group({
    content: new FormControl('', [Validators.required, Validators.minLength(1)])
  })

  onCommentEdit(): void {
    this.editMode = !this.editMode
    this.form.setValue({
      content: this.comment.body
    })
  }

  onEdit(): void {
    let content = this.form.value['content']
    let data = {
      'body': content
    }
    this.editMode = !this.editMode
    this.commentService.editComment(this.comment.id, data).subscribe()
    this.comment.body = content
  }

  onCommentRemove(): void {
    this.commentService.deleteComment(this.comment.id).subscribe()
    this.delete.emit(this.comment);
  }
}
