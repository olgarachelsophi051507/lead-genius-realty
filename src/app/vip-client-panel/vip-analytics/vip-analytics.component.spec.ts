import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipAnalyticsComponent } from './vip-analytics.component';

describe('VipAnalyticsComponent', () => {
  let component: VipAnalyticsComponent;
  let fixture: ComponentFixture<VipAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VipAnalyticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VipAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
