import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { IProfile } from 'src/app/core/interfaces/profile';
import { IUser } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  profile: IProfile;

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('profileId')
    this.userService.getProfile(id!).subscribe({
      next:
        (profile) => {
          this.profile = profile
        },
      error: (err) => {
        this.router.navigate(["not-found"])
      }
    })
  }

}
