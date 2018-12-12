import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetmodalComponent } from './resetmodal.component';

describe('ResetmodalComponent', () => {
  let component: ResetmodalComponent;
  let fixture: ComponentFixture<ResetmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
