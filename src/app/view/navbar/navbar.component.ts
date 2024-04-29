import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [RouterModule, MatIconModule, CommonModule, FormsModule],
})
export class NavbarComponent {
  inputId = '';

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmitSearch() {
    // console.log(this.inputId);
    this.bookService.getBook(this.inputId).subscribe(
      (result) => {
        // window.location.reload();
        if (result) {
          const bookId = result.id; // หาไอดีของหนังสือจากผลลัพธ์
          // นำไอดีไปใช้ในการเปลี่ยนเส้นทางไปยังหน้าอัพเดตหนังสือ
          this.router.navigate(['/update_book', bookId]);
        } else {
          alert('ไม่มีหนังสือ ID นี้ใน Sqlite'); // หรือให้ทำอย่างอื่นในกรณีที่ไม่พบหนังสือ
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
