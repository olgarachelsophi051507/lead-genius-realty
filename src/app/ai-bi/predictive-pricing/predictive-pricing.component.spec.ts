import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictivePricingComponent } from './predictive-pricing.component';

describe('PredictivePricingComponent', () => {
  let component: PredictivePricingComponent;
  let fixture: ComponentFixture<PredictivePricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PredictivePricingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictivePricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
