import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappIntegrationComponent } from './whatsapp-integration.component';

describe('WhatsappIntegrationComponent', () => {
  let component: WhatsappIntegrationComponent;
  let fixture: ComponentFixture<WhatsappIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappIntegrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
