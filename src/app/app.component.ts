import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Token } from '@angular/compiler/src/ml_parser/tokens';
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

  constructor(
    private tokenService: TokenService,
    private userService: UserService
    ) {}

  ngOnInit(): void {
    this.user = this.tokenService.getUsername();
  }

  logout(): void {
    this.userService.logout();
    window.location.reload();
  }
}
