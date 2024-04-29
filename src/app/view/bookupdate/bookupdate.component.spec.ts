/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookUpdateComponent } from './bookupdate.component';

describe('BookUpdateComponent', () => {
  let component: BookUpdateComponent;
  let fixture: ComponentFixture<BookUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookUpdateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
