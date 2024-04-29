import { Component } from '@angular/core';
import Book from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-booklist',
  standalone: true,
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
  imports: [CommonModule, RouterModule],
})
export class BookListComponent {
  AllBook: Book[] = [];
  idBook: string | null | undefined;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      (result) => {
        this.AllBook = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onClickDelete(bookId: number) {
    const confirmDelete = confirm('ยืนยันลบรายการนี้?');
    if (confirmDelete) {
      this.bookService.delete(bookId).subscribe(
        (result) => {
          this.AllBook = this.AllBook.filter((book) => book.id !== bookId);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
