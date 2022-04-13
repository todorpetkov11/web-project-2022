import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/auth/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  errorMsg: string = ''

  form: FormGroup = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
  }

  onSubmit() {
    this.errorMsg = '';
    this.userService.login(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/home'])
      },
      error: (e) => {
        if (e.code === 'auth/user-not-found') {
          this.errorMsg = "User not found!"
        }
        else {
          this.errorMsg = "Invalid password!"
        }
      }
    })

  }

}
