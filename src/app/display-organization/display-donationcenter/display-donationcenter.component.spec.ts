import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDonationcenterComponent } from './display-donationcenter.component';

describe('DisplayDonationcenterComponent', () => {
  let component: DisplayDonationcenterComponent;
  let fixture: ComponentFixture<DisplayDonationcenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDonationcenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDonationcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
