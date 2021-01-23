import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySeniorprogramComponent } from './display-seniorprogram.component';

describe('DisplaySeniorprogramComponent', () => {
  let component: DisplaySeniorprogramComponent;
  let fixture: ComponentFixture<DisplaySeniorprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySeniorprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySeniorprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
