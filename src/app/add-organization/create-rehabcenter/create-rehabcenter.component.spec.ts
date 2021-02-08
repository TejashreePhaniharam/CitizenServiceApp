import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRehabcenterComponent } from './create-rehabcenter.component';

describe('CreateRehabcenterComponent', () => {
  let component: CreateRehabcenterComponent;
  let fixture: ComponentFixture<CreateRehabcenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRehabcenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRehabcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
