import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private userService: UserService, private router: Router) { }

  userProfile: string;

  isLogged() {
    const user = this.userService.isLogged
    this.userProfile = JSON.parse(user!).profileId
    return user
  }

  onLogout() {
    this.userService.logout()
    this.router.navigate(['/home'])
  }

}
