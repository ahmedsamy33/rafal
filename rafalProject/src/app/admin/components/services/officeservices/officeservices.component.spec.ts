import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeservicesComponent } from './officeservices.component';

describe('OfficeservicesComponent', () => {
  let component: OfficeservicesComponent;
  let fixture: ComponentFixture<OfficeservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
