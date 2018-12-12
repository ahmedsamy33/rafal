import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishComponent } from './establish.component';

describe('EstablishComponent', () => {
  let component: EstablishComponent;
  let fixture: ComponentFixture<EstablishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
