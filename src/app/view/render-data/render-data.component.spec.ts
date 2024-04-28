/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RenderDataComponent } from './render-data.component';

describe('RenderDataComponent', () => {
  let component: RenderDataComponent;
  let fixture: ComponentFixture<RenderDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
