import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationSettingsComponent } from './recommendation-settings.component';

describe('RecommendationSettingsComponent', () => {
  let component: RecommendationSettingsComponent;
  let fixture: ComponentFixture<RecommendationSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendationSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
