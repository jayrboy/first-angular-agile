import { Component } from '@angular/core';
import Book from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { BookCreateComponent } from '../bookcreate/bookcreate.component';
import { UploadImageComponent } from '../uploadimage/uploadimage.component';

@Component({
  selector: 'app-booklist',
  standalone: true,
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
  imports: [CommonModule, BookCreateComponent, UploadImageComponent],
})
export class BookListComponent {
  AllBook: Book[] = [];

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
}
