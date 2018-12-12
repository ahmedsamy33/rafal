import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalcompanyComponent } from './internationalcompany.component';

describe('InternationalcompanyComponent', () => {
  let component: InternationalcompanyComponent;
  let fixture: ComponentFixture<InternationalcompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalcompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
