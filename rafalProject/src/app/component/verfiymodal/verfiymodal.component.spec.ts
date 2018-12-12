import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfiymodalComponent } from './verfiymodal.component';

describe('VerfiymodalComponent', () => {
  let component: VerfiymodalComponent;
  let fixture: ComponentFixture<VerfiymodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerfiymodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerfiymodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
