import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHandicappedComponent } from './display-handicapped.component';

describe('DisplayHandicappedComponent', () => {
  let component: DisplayHandicappedComponent;
  let fixture: ComponentFixture<DisplayHandicappedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayHandicappedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayHandicappedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
