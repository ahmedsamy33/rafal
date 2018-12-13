import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringlaborsadminComponent } from './hiringlaborsadmin.component';

describe('HiringlaborsadminComponent', () => {
  let component: HiringlaborsadminComponent;
  let fixture: ComponentFixture<HiringlaborsadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiringlaborsadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiringlaborsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
