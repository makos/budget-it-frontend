import { Injectable } from '@angular/core';
import { decode as jwtDecode } from 'jsonwebtoken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private user: string;

  getToken(): string {
    return localStorage.getItem('jwt');
  }

  setToken(token: string) {
    localStorage.setItem('jwt', token);
    this.setUser();
  }

  private setUser() {
    this.user = this.decodeToken();
  }

  removeToken() {
    localStorage.removeItem('jwt');
    this.user = null;
  }

  getUsername(): string {
    return this.user;
  }

  private decodeToken(): string {
    const decoded = jwtDecode(localStorage.getItem('jwt'));
    if (decoded instanceof Object) {
      return decoded.loggedInAs;
    }
    return decoded;
  }

  constructor() {
    this.setUser();
  }
}
