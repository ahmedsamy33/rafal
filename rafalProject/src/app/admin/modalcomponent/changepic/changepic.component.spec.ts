import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepicComponent } from './changepic.component';

describe('ChangepicComponent', () => {
  let component: ChangepicComponent;
  let fixture: ComponentFixture<ChangepicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangepicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
