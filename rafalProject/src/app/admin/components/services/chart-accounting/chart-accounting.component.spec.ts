import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAccountingComponent } from './chart-accounting.component';

describe('ChartAccountingComponent', () => {
  let component: ChartAccountingComponent;
  let fixture: ComponentFixture<ChartAccountingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartAccountingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
