import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyRecommendationsComponent } from './property-recommendations.component';

describe('PropertyRecommendationsComponent', () => {
  let component: PropertyRecommendationsComponent;
  let fixture: ComponentFixture<PropertyRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyRecommendationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
