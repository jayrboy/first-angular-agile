import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import Book from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  readonly baseURL = 'http://localhost:3000/books';

  getBooks() {
    return this.http.get<Book[]>(`${this.baseURL}`);
  }

  getBook(id: number | string) {
    return this.http.get<Book>(`${this.baseURL}/${id}`);
  }

  post(book: Book) {
    return this.http.post<Book>(`${this.baseURL}`, book);
  }

  put(book: Book) {
    return this.http.put<Book>(`${this.baseURL}`, book);
  }

  delete(id: number | string) {
    return this.http.delete<Book>(`${this.baseURL}/${id}`);
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
