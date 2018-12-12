import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewinvestorComponent } from './newinvestor.component';

describe('NewinvestorComponent', () => {
  let component: NewinvestorComponent;
  let fixture: ComponentFixture<NewinvestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewinvestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewinvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
