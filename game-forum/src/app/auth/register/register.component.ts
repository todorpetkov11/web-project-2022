import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { Validation } from '../validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private cd: ChangeDetectorRef) { }

  fileName: string = "You haven\'t selected a file yet.";
  file: File;

  errorMsg: string = ''

  form: FormGroup = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    photoUrl: new FormControl(''),
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40)
      ]
    ],
    confirmPassword: ['', Validators.required]
  },
    {
      validators: [Validation.match('password', 'confirmPassword')]
    }
  );

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
    this.userService.register(data).subscribe({
      error: (err) => {
        this.errorMsg = err
      }
    })
    this.router.navigate(['/login'])
  }

}
