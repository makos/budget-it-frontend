import { Injectable } from '@angular/core';
import { Record } from './record';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { Config } from './config';
import { ErrorHandlerService } from './error-handler.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  loggedInUser: string;
  
  private recordType: string;
  private apiUrl = Config.getIncomeUrl(); 
  private httpOptions: Object; 

  getRecords(): Observable<Record[]> {
    this.refreshToken();
    return this.http.get<Record[]>(this.apiUrl, this.httpOptions)
      .pipe(catchError(this.errorHandler.handleError));
  }

  getRecord(id: number): Observable<Record> {
    this.refreshToken();
    return this.http.get<Record>(this.apiUrl + id.toString(), this.httpOptions)
      .pipe(catchError(this.errorHandler.handleError));
  }

  setRecordType(type: string) {
    if (type == 'Income') {
      this.recordType = type;
      this.apiUrl = Config.getIncomeUrl();
    } else if (type == 'Expense') {
      this.recordType = type;
      this.apiUrl = Config.getExpensesUrl();
    }
  }

  addRecord(amount: number, type: string, comment: string, recordType: string) {
    const body: object = {
      amount: amount,
      type: type,
      comment: comment,
      recordType: recordType
    };

    return this.http.post<Record>(this.apiUrl, body, this.httpOptions)
      .pipe(catchError(this.errorHandler.handleError));
  }

  private refreshToken() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.tokenService.getToken(),
      })
    };
  }

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private errorHandler: ErrorHandlerService,
  ) {
    this.refreshToken();
  }
}
