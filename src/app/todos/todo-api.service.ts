import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  baseUri:string = 'http://localhost:4000/todos';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  createTodo(data): Observable<any> {           //Create
    const url = `${this.baseUri}`
    return this.httpClient.post(url, data).pipe(
      catchError(this.errorManager)
    )
  }

  getTodos(): Observable<any> {                  //Read all
    return this.httpClient.get(`${this.baseUri}`);
  }

  getTodo(id) {                                 //Read
    const url = `${this.baseUri}/${id}`;
    return this.httpClient.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorManager)
    )
  }

  updateTodo(id, data): Observable<any> {
    const url = `${this.baseUri}/${id}`;
    return this.httpClient.put(url, data, {headers: this.headers}).pipe(
      catchError(this.errorManager)      
    );
  }

  deleteTodo(id): Observable<any> {
    const url = `${this.baseUri}/${id}`;
    return this.httpClient.delete(url, {headers: this.headers}).pipe(
      catchError(this.errorManager)      
    );
  }

  errorManager(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
