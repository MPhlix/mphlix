import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MphlixTeamComponent } from './mphlix-team.component';

describe('MphlixTeamComponent', () => {
  let component: MphlixTeamComponent;
  let fixture: ComponentFixture<MphlixTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MphlixTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MphlixTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
