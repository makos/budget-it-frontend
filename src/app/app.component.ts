import { Component, OnInit } from '@angular/core';
import { TokenService } from './token.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Budget It';
  user: string;

  logout() {
    this.userService.logout();
    location.reload();
  }

  constructor(
    private tokenService: TokenService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.user = this.tokenService.getUsername();
  }
}
