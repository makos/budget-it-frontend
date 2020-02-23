import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  login(username: string, password: string) {
    this.userService.login(username, password);
  }


  ngOnInit(): void {
    this.userService.loginEvent.subscribe((event) => {
      if (event) {
        location.reload();
      }
    })
  }
}
