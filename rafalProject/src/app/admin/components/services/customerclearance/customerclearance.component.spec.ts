import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerclearanceComponent } from './customerclearance.component';

describe('CustomerclearanceComponent', () => {
  let component: CustomerclearanceComponent;
  let fixture: ComponentFixture<CustomerclearanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerclearanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerclearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
