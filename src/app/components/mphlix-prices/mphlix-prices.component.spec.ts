import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MphlixPricesComponent } from './mphlix-prices.component';

describe('MphlixPricesComponent', () => {
  let component: MphlixPricesComponent;
  let fixture: ComponentFixture<MphlixPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MphlixPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MphlixPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
