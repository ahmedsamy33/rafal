import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeasibilitystudyComponent } from './feasibilitystudy.component';

describe('FeasibilitystudyComponent', () => {
  let component: FeasibilitystudyComponent;
  let fixture: ComponentFixture<FeasibilitystudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeasibilitystudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeasibilitystudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
