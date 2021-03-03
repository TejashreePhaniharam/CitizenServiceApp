import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFoodbankComponent } from './display-foodbank.component';

describe('DisplayFoodbankComponent', () => {
  let component: DisplayFoodbankComponent;
  let fixture: ComponentFixture<DisplayFoodbankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFoodbankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFoodbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
