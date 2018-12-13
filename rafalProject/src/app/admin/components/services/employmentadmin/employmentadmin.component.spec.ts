import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentadminComponent } from './employmentadmin.component';

describe('EmploymentadminComponent', () => {
  let component: EmploymentadminComponent;
  let fixture: ComponentFixture<EmploymentadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
