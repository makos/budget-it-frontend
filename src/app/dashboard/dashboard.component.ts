import { Component, OnInit } from '@angular/core';
import { TokenService } from '../token.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: string;

  logout() {
    this.userService.logout();
    location.reload();
  }

  constructor(
    private tokenService: TokenService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = this.tokenService.getUsername();
  }

}
