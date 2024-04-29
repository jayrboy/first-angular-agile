import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import Book from '../../models/book.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookupdate',
  standalone: true,
  templateUrl: './bookupdate.component.html',
  styleUrls: ['./bookupdate.component.css'],
  imports: [FormsModule],
})
export class BookUpdateComponent {
  book = new Book();
  idBook = '';

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  onReadBook() {
    this.bookService.getBook(this.idBook).subscribe(
      (result) => {
        this.book = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit(): void {
    this.idBook = this.route.snapshot.paramMap.get('id') ?? '0';
    this.onReadBook();
    // console.log(this.idBook);
  }

  onSubmit() {
    this.bookService.put(this.book).subscribe(
      (result) => {
        window.location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
