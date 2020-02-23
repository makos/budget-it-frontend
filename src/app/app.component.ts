import { Component, OnInit } from '@angular/core';
import { TokenService } from './token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Budget It';
  user: string;

  constructor(
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.user = this.tokenService.getUsername();
  }
}
