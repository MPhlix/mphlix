import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MphlixTestimonyComponent } from './mphlix-testimony.component';

describe('MphlixTestimonyComponent', () => {
  let component: MphlixTestimonyComponent;
  let fixture: ComponentFixture<MphlixTestimonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MphlixTestimonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MphlixTestimonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
