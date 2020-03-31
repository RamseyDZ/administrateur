import { Injectable } from '@angular/core';
import { utilisateur } from '../model/user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoint: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Add user
  AddUser(data: utilisateur): Observable<any> {
    let API_URL = `${this.endpoint}/add-user`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all users
  GetUsers() {
    return this.http.get(`${this.endpoint}`);
  }

  // Get user
  GetUser(id): Observable<any> {
    let API_URL = `${this.endpoint}/read-user/${id}`;
    return this.http.get(API_URL, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update student
  UpdateUser(id, data: utilisateur): Observable<any> {
    let API_URL = `${this.endpoint}/update/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete student
  DeleteUser(id): Observable<any> {
    var API_URL = `${this.endpoint}/delete-user/${id}`;
    return this.http.delete(API_URL).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Code Erreur: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
