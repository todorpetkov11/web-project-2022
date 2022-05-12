import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { IProfile } from 'src/app/core/interfaces/profile';
import { IThread } from 'src/app/core/interfaces/thread';
import { IUser } from 'src/app/core/interfaces/user';
import { ThreadService } from 'src/app/core/services/thread.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router, private threadService: ThreadService) { }

  profile: IUser;
  threads: IThread[];
  currentUser: string = this.userService.currentUserId

  ngOnInit(): void {
    const username = this.activatedRoute.snapshot.paramMap.get('username')
    this.userService.getProfile(username!).subscribe({
      next:
        (profile) => {
          this.profile = profile
          this.threads = profile.threads
        },
      error: (error) => {
        console.log(error)
      }
    })
  }

  onDelete() {
    this.userService.deleteUser().subscribe()
    this.userService.logout()
    this.router.navigate(['/register'])
  }

}
