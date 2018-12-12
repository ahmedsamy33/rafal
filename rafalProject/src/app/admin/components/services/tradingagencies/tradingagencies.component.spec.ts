import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingagenciesComponent } from './tradingagencies.component';

describe('TradingagenciesComponent', () => {
  let component: TradingagenciesComponent;
  let fixture: ComponentFixture<TradingagenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingagenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingagenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
