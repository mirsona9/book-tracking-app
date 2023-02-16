import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './Book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost:8080/";

  //add book
  addBook(book: Book) {
    return this.http.post<Book>(`${this.url}add`, book)
  }

  //get books
  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}books`)
  }

  //get book by id
  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.url}book/${id}`)
  }

  //update book
  updateBook(id: number, book: Book): Observable<any> {
    return this.http.put<any>(`${this.url}update/${id}`, book)
  }

  //delete book
  deleteBook(id: number) :Observable<any> {
    return this.http.delete<any>(`${this.url}delete/${id}`)
  }

}
