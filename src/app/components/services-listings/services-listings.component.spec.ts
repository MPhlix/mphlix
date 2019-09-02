import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesListingsComponent } from './services-listings.component';

describe('ServicesListingsComponent', () => {
  let component: ServicesListingsComponent;
  let fixture: ComponentFixture<ServicesListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
