import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveChatInterfaceComponent } from './live-chat-interface.component';

describe('LiveChatInterfaceComponent', () => {
  let component: LiveChatInterfaceComponent;
  let fixture: ComponentFixture<LiveChatInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveChatInterfaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveChatInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
