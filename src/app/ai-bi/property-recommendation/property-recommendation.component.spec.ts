import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyRecommendationComponent } from './property-recommendation.component';

describe('PropertyRecommendationComponent', () => {
  let component: PropertyRecommendationComponent;
  let fixture: ComponentFixture<PropertyRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyRecommendationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
