import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantIntegrationComponent } from './assistant-integration.component';

describe('AssistantIntegrationComponent', () => {
  let component: AssistantIntegrationComponent;
  let fixture: ComponentFixture<AssistantIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssistantIntegrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssistantIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
