import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignSegmentComponent } from './campaign-segment.component';

describe('CampaignSegmentComponent', () => {
  let component: CampaignSegmentComponent;
  let fixture: ComponentFixture<CampaignSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignSegmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
