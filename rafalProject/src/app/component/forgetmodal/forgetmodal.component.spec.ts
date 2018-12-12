import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetmodalComponent } from './forgetmodal.component';

describe('ForgetmodalComponent', () => {
  let component: ForgetmodalComponent;
  let fixture: ComponentFixture<ForgetmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
