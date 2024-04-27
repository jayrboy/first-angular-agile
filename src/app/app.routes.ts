import { Routes } from '@angular/router';
import { NewComponent } from './view/newcomponent/newcomponent.component';

export const routes: Routes = [
  { path: 'test_path', component: NewComponent },
  { path: 'test_path/:id', component: NewComponent },
];
