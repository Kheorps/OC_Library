import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { Subject } from 'rxjs';
import { database } from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Book[] = [];
  booksSubject = new Subject<Book[]>();

  constructor() {
    this.getBooks();
  }

  emitbooks() {
    this.booksSubject.next(this.books);
  }

  savebooks() {
    database().ref('/books').set(this.books);
  }

  getBooks() {
    database().ref('/books').on(
      'value', (data: DataSnapshot) => {
        this.books = data.val() ? data.val() : [];
        this.emitbooks();
      }
    );
  }

  getSinglebook(id: number) {
    return new Promise(
      (resolve, reject) => {
        database().ref('/books/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewBook(newBook: Book) {
    this.books.push(newBook);
    this.savebooks();
    this.emitbooks();
  }

  removebook(book: Book) {
    const bookIndexToRemove = this.books.findIndex(
      (bookEl) => {
        if (bookEl === book) {
          return true;
        }
      }
    );
    this.books.splice(bookIndexToRemove, 1);
    this.savebooks();
    this.emitbooks();
  }
}
