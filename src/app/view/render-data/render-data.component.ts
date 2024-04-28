import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-render-data',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './render-data.component.html',
  styleUrls: ['./render-data.component.css'],
})
export class RenderDataComponent {
  array = [1, 3, 6, 8];
  arraySample = [1, 3, 99, 6, 8];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
