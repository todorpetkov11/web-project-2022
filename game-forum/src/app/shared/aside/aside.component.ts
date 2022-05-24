import { Component, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {

  public admin: boolean = true;
  public genreAddClicked: boolean = false;
  public popularAddClicked: boolean = false;
  public genreList = [{
    name: 'Roleplay',
    id: 1
  },
  {
    name: 'MOBA',
    id: 2
  },
  {
    name: 'Simulation',
    id: 3
  },
  {
    name: 'Cards',
    id: 4
  }];

  public popularList = [{
    name: 'World of Warcraft',
    id: 1
  },
  {
    name: 'League of Legends',
    id: 2
  },
  {
    name: 'FIFA 22',
    id: 3
  },
  {
    name: 'Elden Ring',
    id: 4
  }]

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  faRemove = faRemove
  faAdd = faPlus

  public form: FormGroup = this.fb.group({
    content: new FormControl('', [Validators.required])
  })

  public popularForm: FormGroup = this.fb.group({
    name: new FormControl('', [Validators.required])
  })

  public genreForm: FormGroup = this.fb.group({
    name: new FormControl('', [Validators.required])
  })

  onSearch(): void {
    this.router.navigateByUrl(`threads?search=${this.form.value['content']}`)
  }

  onRemoveGenreClick(id: number): void {
    this.genreList = this.genreList.filter(genre=> genre.id !== id)

    // TODO: Aside Service to remove genres and popular now in DB
  }

  onRemovePopularClick(id: number): void {
    this.popularList = this.popularList.filter(popular=> popular.id !== id)
    // TODO: Aside Service to remove genres and popular now in DB
  }

  onGenreAddClick(): void {
    this.genreAddClicked = !this.genreAddClicked
  }

  onGenreSubmit(): void {
    let data = this.genreForm.value
    data['id'] = '10'
    this.genreList.push(data)
    this.genreForm.reset()

    // TODO: Aside Service to save genres and popular now in DB
  }

  onPopularAddClick(): void {
    this.popularAddClicked = !this.popularAddClicked
  }

  onPopularSubmit(): void {
    // TODO: Aside Service to save genres and popular now in DB
    let data = this.popularForm.value
    data['id'] = '10'
    console.log(data)
    this.popularList.push(data)
  }
}
