import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingadminComponent } from './shippingadmin.component';

describe('ShippingadminComponent', () => {
  let component: ShippingadminComponent;
  let fixture: ComponentFixture<ShippingadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
