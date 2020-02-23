import { Injectable, ErrorHandler } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
  handleError(error: any) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
              `Backend returned code ${error.status}, `,
              error.error 
      );
    }

    return throwError('An error occured.');
  }
}
