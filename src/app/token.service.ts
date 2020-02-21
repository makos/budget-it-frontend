import { Injectable } from '@angular/core';
import { decode as jwtDecode } from 'jsonwebtoken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  
  getToken(): string {
    return localStorage.getItem('jwt');
  }

  setToken(token: string) {
    localStorage.setItem('jwt', token);
  }

  removeToken() {
    localStorage.removeItem('jwt');
  }

  getUser(): string {
    const decoded = jwtDecode(localStorage.getItem('jwt'));
    console.log(decoded);
    if (decoded instanceof Object) {
      return decoded.loggedInAs;
    }
    return decoded;
  }

  constructor() { }
}
