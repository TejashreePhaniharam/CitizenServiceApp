import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRehabcenterComponent } from './display-rehabcenter.component';

describe('DisplayRehabcenterComponent', () => {
  let component: DisplayRehabcenterComponent;
  let fixture: ComponentFixture<DisplayRehabcenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayRehabcenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRehabcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
