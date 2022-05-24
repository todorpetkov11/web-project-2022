import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faRemove, faEdit } from '@fortawesome/free-solid-svg-icons';
import { IComment } from 'src/app/core/interfaces/comment';
import { IUser } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-thread-comments-item',
  templateUrl: './thread-comments-item.component.html',
  styleUrls: ['./thread-comments-item.component.css']
})
export class ThreadCommentsItemComponent implements OnInit {

  faRemove = faRemove
  faEdit = faEdit

  constructor(private userService: UserService, private fb: FormBuilder) { }

  @Input() comment: IComment;
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

  onCommentRemove(): void {

    //TODO: Comment removal service

  }

  onCommentEdit(id: number): void {
    this.editMode = !this.editMode
    this.form.setValue({
      content: this.comment.body
    })
    console.log(this.editMode)
  }

  onEdit(): void {
    // TODO: Comment edit service
  }

}
