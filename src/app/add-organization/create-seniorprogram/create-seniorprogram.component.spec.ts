import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSeniorprogramComponent } from './create-seniorprogram.component';

describe('CreateSeniorprogramComponent', () => {
  let component: CreateSeniorprogramComponent;
  let fixture: ComponentFixture<CreateSeniorprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSeniorprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSeniorprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
