import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignTemplatesComponent } from './campaign-templates.component';

describe('CampaignTemplatesComponent', () => {
  let component: CampaignTemplatesComponent;
  let fixture: ComponentFixture<CampaignTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignTemplatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
