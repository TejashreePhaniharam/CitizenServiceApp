import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFoodbankComponent } from './create-foodbank.component';

describe('CreateFoodbankComponent', () => {
  let component: CreateFoodbankComponent;
  let fixture: ComponentFixture<CreateFoodbankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFoodbankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFoodbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
