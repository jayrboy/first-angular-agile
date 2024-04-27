import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'new-component',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css'],
})
export class NewComponent {
  idText: string | null | undefined;
  array = [1, 3, 6, 8];
  arraySample = [1, 3, 99, 6, 8];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idText = this.route.snapshot.paramMap.get('id');
    console.log(this.idText);
  }

  testInput = '';
  testInputStr = '';
  onKey(event: any) {
    this.testInput = event.target?.value;
  }
}
