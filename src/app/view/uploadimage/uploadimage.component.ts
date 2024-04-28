import { Component } from '@angular/core';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'uploadImage-component',
  standalone: true,
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.css'],
})
export class UploadImageComponent {
  image: File | null = null;
  show_url = '';
  img_url = '';

  uploading(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.image = file;
      this.show_url = URL.createObjectURL(file);
    }
  }
  constructor(private uploadService: UploadService) {}
  sendToServer() {
    if (this.image != null) {
      this.uploadService.upload(this.image).subscribe(
        (result) => {
          if (this.image != null)
            this.img_url = this.uploadService.download(this.image);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
