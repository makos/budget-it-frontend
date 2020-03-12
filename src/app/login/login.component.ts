import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login(username: string, password: string) {
    this.userService.login(username, password);
  }

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.loginEvent.subscribe((event) => {
      if (event) {
        location.reload();
      }
    });
  }
}
