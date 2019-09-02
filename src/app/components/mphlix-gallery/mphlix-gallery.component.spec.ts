import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MphlixGalleryComponent } from './mphlix-gallery.component';

describe('MphlixGalleryComponent', () => {
  let component: MphlixGalleryComponent;
  let fixture: ComponentFixture<MphlixGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MphlixGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MphlixGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
