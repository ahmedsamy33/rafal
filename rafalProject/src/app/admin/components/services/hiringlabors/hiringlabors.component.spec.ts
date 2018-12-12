import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringlaborsComponent } from './hiringlabors.component';

describe('HiringlaborsComponent', () => {
  let component: HiringlaborsComponent;
  let fixture: ComponentFixture<HiringlaborsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiringlaborsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiringlaborsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
