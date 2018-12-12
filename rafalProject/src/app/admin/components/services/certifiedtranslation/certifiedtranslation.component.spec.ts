import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifiedtranslationComponent } from './certifiedtranslation.component';

describe('CertifiedtranslationComponent', () => {
  let component: CertifiedtranslationComponent;
  let fixture: ComponentFixture<CertifiedtranslationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertifiedtranslationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifiedtranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
