import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-route-parameter',
  templateUrl: './route-parameter.component.html',
  styleUrls: ['./route-parameter.component.css'],
})
export class RouteParameterComponent {
  idText: string | null | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idText = this.route.snapshot.paramMap.get('id');
    console.log(this.idText);
  }
}
