import { ChangeDetectorRef, Component } from '@angular/core';
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

  fileName: string = '"You haven\'t selected a file yet."';
  file: File;

  errorMsg: string = ''

  form: FormGroup = this.fb.group({
    title: new FormControl('', [Validators.required, Validators.email]),
    game: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    photoUrl: new FormControl(''),
    description: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required])
  })

  constructor(private fb: FormBuilder,
    private threadService: ThreadService,
    private userService: UserService,
    private cd: ChangeDetectorRef,
    private router: Router) { }

  onFileSelected(event: any) {
    const reader = new FileReader
    this.file = event.target.files[0];
    if (this.file) {
      this.fileName = this.file.name;
      reader.readAsDataURL(this.file);
      reader.onload = () => {
        this.form.patchValue({
          photoUrl: reader.result
        });
        this.cd.markForCheck();
      };
    }
  }

  onSubmit() {
    const data = this.form.value
    data['authorId'] = Number(this.userService.currentUserId);
    data['authorName'] = this.userService.currentUserUsername
    this.threadService.createThread(this.form.value).subscribe({
      error: (err) => {
        this.errorMsg = err
      }
    })
    this.router.navigate(['/home'])
  }
}


