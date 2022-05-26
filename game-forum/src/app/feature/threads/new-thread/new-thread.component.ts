import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ThreadService } from 'src/app/core/services/thread.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent {

  fileName: string = 'You haven\'t selected a file yet.';

  errorMsg: string = ''

  form: FormGroup = this.fb.group({
    title: new FormControl('', [Validators.required]),
    game: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    image: new FormControl(''),
    description: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required])
  })

  constructor(private fb: FormBuilder,
    private threadService: ThreadService,
    private userService: UserService,
    private router: Router) { }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      this.form.patchValue({
        image: file
      })
    }
  }

  onSubmit() {
    const data = this.form.value
    data['author'] = this.userService.currentUserUsername
    this.threadService.createThread(data).subscribe({
      next: (thread) => {
        console.log(thread)
      },
      error: (err) => {
        this.errorMsg = err
      }
    })
    this.router.navigate(['/home'])
  }
}


