import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}

  testInput = '';
  testInputStr = '';
  onKey(event: any) {
    this.testInput = event.target?.value;
  }
}
