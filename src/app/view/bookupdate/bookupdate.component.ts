import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import Book from '../../models/book.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

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
    // Subscribe กับ paramMap ของ ActivatedRoute เพื่อติดตามการเปลี่ยนแปลงของ URL params
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.idBook = params.get('id') ?? '0';
          return this.bookService.getBook(this.idBook);
        })
      )
      .subscribe(
        // ผลลัพธ์ที่ได้รับจาก getBook(id)
        (result) => {
          this.book = result;
        },
        (error) => {
          console.error(error);
        }
      );
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
