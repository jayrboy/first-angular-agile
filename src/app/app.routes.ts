import { Routes } from '@angular/router';
import { NewComponent } from './view/newcomponent/newcomponent.component';
import { RouteParameterComponent } from './view/route-parameter/route-parameter.component';
import { RenderDataComponent } from './view/render-data/render-data.component';
import { InputComponent } from './view/input/input.component';
import { BookCreateComponent } from './view/bookcreate/bookcreate.component';
import { BookUpdateComponent } from './view/bookupdate/bookupdate.component';

export const routes: Routes = [
  { path: 'test_path', component: NewComponent },
  { path: 'test_path/:id', component: RouteParameterComponent },
  { path: 'render_data', component: RenderDataComponent },
  { path: 'input', component: InputComponent },
  { path: 'create_book', component: BookCreateComponent },
  { path: 'update_book/:id', component: BookUpdateComponent },
];
