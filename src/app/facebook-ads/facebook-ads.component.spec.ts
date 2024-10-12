import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookAdsComponent } from './facebook-ads.component';

describe('FacebookAdsComponent', () => {
  let component: FacebookAdsComponent;
  let fixture: ComponentFixture<FacebookAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacebookAdsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
