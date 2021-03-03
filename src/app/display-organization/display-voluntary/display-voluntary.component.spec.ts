import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayVoluntaryComponent } from './display-voluntary.component';

describe('DisplayVoluntaryComponent', () => {
  let component: DisplayVoluntaryComponent;
  let fixture: ComponentFixture<DisplayVoluntaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayVoluntaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayVoluntaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
