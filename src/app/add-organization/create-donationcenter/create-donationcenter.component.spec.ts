import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDonationcenterComponent } from './create-donationcenter.component';

describe('CreateDonationcenterComponent', () => {
  let component: CreateDonationcenterComponent;
  let fixture: ComponentFixture<CreateDonationcenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDonationcenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDonationcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
