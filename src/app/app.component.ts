import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BookListComponent } from './view/booklist/booklist.component';
import { UploadImageComponent } from './view/uploadimage/uploadimage.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    NavbarComponent,
    BookListComponent,
    UploadImageComponent,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
}
