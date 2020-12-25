import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LipTripMainComponent } from './lip-trip-main.component';

describe('LipTripMainComponent', () => {
  let component: LipTripMainComponent;
  let fixture: ComponentFixture<LipTripMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LipTripMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LipTripMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
