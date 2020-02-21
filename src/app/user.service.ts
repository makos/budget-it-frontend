import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { Config } from './config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = Config.getLoginUrl();
  private token: Object;

  login(user: string, pass: string) {
    this.http.post(this.apiUrl, {
      username: user,
      password: pass,
    }).subscribe((data) => {
      this.tokenService.removeToken();
      this.tokenService.setToken(data.toString());
    });
  }

  getToken(): Object {
    return this.tokenService.getToken();
  }

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) { }
}
