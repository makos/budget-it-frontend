import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  register(username: string, password: string) {
    this.userService.register(username, password);
  }

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.loginEvent.subscribe((event) => {
      if (event) {
        window.location.assign('');
      }
    });
  }
}
