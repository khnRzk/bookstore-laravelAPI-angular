import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListsFetchComponent } from './book-lists-fetch.component';

describe('BookListsFetchComponent', () => {
  let component: BookListsFetchComponent;
  let fixture: ComponentFixture<BookListsFetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListsFetchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListsFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
