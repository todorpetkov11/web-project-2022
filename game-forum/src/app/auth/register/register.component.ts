import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/auth/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  errorMsg: string = ''

  form: FormGroup = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    password: new FormControl('', [Validators.required]),
    rePassword: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
  }

  onSubmit() {
    this.errorMsg = '';
    this.userService.register(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/login'])
      },
      error: (e) => {
        this.errorMsg = e.code
      }
    })

  }

}
