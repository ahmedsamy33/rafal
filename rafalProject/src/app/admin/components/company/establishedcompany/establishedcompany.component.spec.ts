import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishedcompanyComponent } from './establishedcompany.component';

describe('EstablishedcompanyComponent', () => {
  let component: EstablishedcompanyComponent;
  let fixture: ComponentFixture<EstablishedcompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablishedcompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishedcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
