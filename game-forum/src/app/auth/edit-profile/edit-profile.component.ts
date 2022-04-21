import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private cd: ChangeDetectorRef,) { }

  fileName = "You haven\'t selected a file yet.";
  file: File;
  currentUser: IUser  = this.userService.currentUser

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

  errorMsg: string = ''

  form: FormGroup = this.fb.group({
    username: new FormControl(`${this.currentUser.username}`, [Validators.required, Validators.maxLength(15)]),
    photoUrl: new FormControl(``)
  })

  ngOnInit(): void {
  }

  onSubmit() {
    // const data = this.form.value
    // if (data['photoUrl'] === ''){
    //   data['photoUrl'] = this.currentUser.photoUrl
    // }
    const data = this.currentUser
    console.log(data)
    this.userService.editProfile(this.currentUser.id, data).subscribe()
    this.router.navigate([`/profile/${this.currentUser.id}`])
   }

}
