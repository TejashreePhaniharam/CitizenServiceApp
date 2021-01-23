import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHandicappedComponent } from './create-handicapped.component';

describe('CreateHandicappedComponent', () => {
  let component: CreateHandicappedComponent;
  let fixture: ComponentFixture<CreateHandicappedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHandicappedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHandicappedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
