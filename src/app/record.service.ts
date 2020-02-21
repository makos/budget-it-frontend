import { Injectable } from '@angular/core';
import { Record } from './record';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { Config } from './config';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  loggedInUser: string;

  private apiUrl = Config.getIncomeUrl(); 
  private httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.tokenService.getToken(),
    })
  };

  getRecords(): Observable<Record[]> {
    return this.http.get<Record[]>(this.apiUrl, this.httpOptions);
  }

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) { }
}
