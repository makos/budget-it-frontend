import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TokenService } from './token.service';
import { Config } from './config';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = Config.getLoginUrl();
  private token: Object;
  loginEvent: Subject<boolean> = new Subject<boolean>();

  login(user: string, pass: string) {
    this.http.post(this.apiUrl, {
      username: user,
      password: pass,
    }).subscribe(
      (data) => {
        this.tokenService.setToken(data.toString());
        this.loginEvent.next(true);
      }, 
      (error) => catchError(this.errorHandler.handleError)
    );
  }

  logout() {
    this.tokenService.removeToken();
  }

  getToken(): Object {
    return this.tokenService.getToken();
  }

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private errorHandler: ErrorHandlerService,
  ) { }
}
