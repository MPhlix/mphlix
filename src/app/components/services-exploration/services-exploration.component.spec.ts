import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesExplorationComponent } from './services-exploration.component';

describe('ServicesExplorationComponent', () => {
  let component: ServicesExplorationComponent;
  let fixture: ComponentFixture<ServicesExplorationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesExplorationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesExplorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
