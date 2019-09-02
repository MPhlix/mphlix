import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterByColorlibComponent } from './footer-by-colorlib.component';

describe('FooterByColorlibComponent', () => {
  let component: FooterByColorlibComponent;
  let fixture: ComponentFixture<FooterByColorlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterByColorlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterByColorlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
