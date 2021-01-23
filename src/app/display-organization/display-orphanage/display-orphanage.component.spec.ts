import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOrphanageComponent } from './display-orphanage.component';

describe('DisplayOrphanageComponent', () => {
  let component: DisplayOrphanageComponent;
  let fixture: ComponentFixture<DisplayOrphanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayOrphanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayOrphanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
