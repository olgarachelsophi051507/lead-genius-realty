import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignContentComponent } from './campaign-content.component';

describe('CampaignContentComponent', () => {
  let component: CampaignContentComponent;
  let fixture: ComponentFixture<CampaignContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
