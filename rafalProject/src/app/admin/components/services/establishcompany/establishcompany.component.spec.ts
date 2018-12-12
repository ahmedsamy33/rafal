import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishcompanyComponent } from './establishcompany.component';

describe('EstablishcompanyComponent', () => {
  let component: EstablishcompanyComponent;
  let fixture: ComponentFixture<EstablishcompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablishcompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
