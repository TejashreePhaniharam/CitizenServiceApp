import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRatioComponent } from './search-ratio.component';

describe('SearchRatioComponent', () => {
  let component: SearchRatioComponent;
  let fixture: ComponentFixture<SearchRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
