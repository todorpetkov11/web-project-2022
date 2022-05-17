import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IComment } from 'src/app/core/interfaces/comment';
import { CommentService } from 'src/app/core/services/comment.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-thread-comments',
  templateUrl: './thread-comments.component.html',
  styleUrls: ['./thread-comments.component.css']
})
export class ThreadCommentsComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private commentService: CommentService,) { }

  currentUser: string = this.userService.currentUserId
  threadId: string | null = this.activatedRoute.snapshot.paramMap.get('threadId')
  comments: IComment[];
  currentUserPfp: string = this.userService.currentUserPfp;
  formSelected: boolean = false;

  form: FormGroup = this.fb.group({
    content: new FormControl('', [Validators.required, Validators.minLength(1)])
  })

  isLogged() {
    return this.userService.isLogged
  }

  ngOnInit(): void {
    this.commentService.retrieveComments(this.threadId!).subscribe({
      next: (comments) => {
        this.comments = comments
        console.log(comments)
      }
    })
  }

  onFormFocus() {
    this.formSelected = true;
  }

  onPost() {
    const data = this.form.value

    data['userId'] = Number(this.currentUser);
    data['threadId'] = Number(this.threadId);
    this.commentService.postComment(data).subscribe({
      next: (comment) => {
        this.comments.unshift(comment)
        this.form.reset()
      }
    })
  }

}
