import { Component } from '@angular/core';
import { UserService } from 'src/app/auth/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private userService: UserService) { }

  isLogged() {
    return this.userService.isLogged
  }

  onLogout() {
    this.userService.logout()
  }

}
