import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://forms-47.herokuapp.com/';

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  registerUser(userRegisterData:any[]): Observable<any> {
    return this.http.post(
      this.baseUrl + 'user/register',
      JSON.stringify(userRegisterData),
      this.httpHeader
    );

}
}