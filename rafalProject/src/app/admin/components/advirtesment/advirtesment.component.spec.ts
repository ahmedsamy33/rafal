import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvirtesmentComponent } from './advirtesment.component';

describe('AdvirtesmentComponent', () => {
  let component: AdvirtesmentComponent;
  let fixture: ComponentFixture<AdvirtesmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvirtesmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvirtesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
