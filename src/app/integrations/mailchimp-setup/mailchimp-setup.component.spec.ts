import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailchimpSetupComponent } from './mailchimp-setup.component';

describe('MailchimpSetupComponent', () => {
  let component: MailchimpSetupComponent;
  let fixture: ComponentFixture<MailchimpSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailchimpSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailchimpSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
