import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }


  form: FormGroup = this.fb.group({
    content: new FormControl('', [Validators.required])
  })

  onSearch(): void {
    console.log(this.form.value)
    this.router.navigateByUrl(`threads?game=${this.form.value['content']}`)
  }

}
