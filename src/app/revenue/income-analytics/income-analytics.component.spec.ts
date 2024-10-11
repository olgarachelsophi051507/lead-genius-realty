import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeAnalyticsComponent } from './income-analytics.component';

describe('IncomeAnalyticsComponent', () => {
  let component: IncomeAnalyticsComponent;
  let fixture: ComponentFixture<IncomeAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeAnalyticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
