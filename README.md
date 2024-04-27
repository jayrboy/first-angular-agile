# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Initial Web Application By Angular CLI

- https://nodejs.org/dist/v20.12.2/node-v20.12.2-x64.msi

- https://angular.io/guide/setup-local

```sh
npm install -g @angular/cli
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

```sh
ng new my-app
cd my-app
ng serve --open
```

## ติดตั้ง Extension เสริมสำหรับ Angular

1. Angular Language Service
2. Angular 17 Snippets
3. Angular Files

## วิธีเปลี่ยน PORT ที่ใช้ RUN APP

- angular.json (บรรทัดที่ 59)

```json
{
  "serve": {
    "defaultConfiguration": "development",
    "options": { "port": 4300 }
  }
}
```

## โครงสร้างพื้นฐานของ Project

src
./app
./assets
./favicon.io
./index.html
./main.ts
./style.css

## ปรับปรุงโครงสร้างโฟลเดอร์ที่ app

1. models (เก็บ Class ของ Model)
2. services (เก็บ Class ที่เชื่อมต่อ API)
3. views (เก็บ Component ที่ไไม่ต้องการ Reusable เช่น Page)
4. components (เก็บ Component ที่ไม่ต้องการ Reusable)

- สร้าง Components ใหม่ใน views/newcomponent
- newcomponent.component.css
- newcomponent.component.html
- newcomponent.component.spec.ts
- newcomponent.component.ts

## กำหนด Route

- app.routes.ts

```ts
import { Routes } from "@angular/router";
import { NewComponent } from "./view/newcomponent/newcomponent.component";

export const routes: Routes = [{ path: "test_path", component: NewComponent }];
```

- app.component.html

```html
<new-component></new-component>
<router-outlet />
<p *ngIf="false; else elseBlock">don't show this</p>
<ng-template #elseBlock>
  <p>show this</p>
</ng-template>
```
