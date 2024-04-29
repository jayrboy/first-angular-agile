import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() strContext = new EventEmitter<string>();

  testInput = '';
  testInputStr = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}

  onKey(event: any) {
    this.testInput = event.target?.value;
    this.strContext.emit(this.testInput);
  }

  onSubmitForm1() {
    console.log('Test Input:', this.testInput);
    this.strContext.emit(this.testInput);
  }

  onSubmitForm2() {
    console.log('Test Input String:', this.testInputStr);
    this.strContext.emit(this.testInputStr);
  }
}
