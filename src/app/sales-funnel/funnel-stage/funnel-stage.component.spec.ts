import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunnelStageComponent } from './funnel-stage.component';

describe('FunnelStageComponent', () => {
  let component: FunnelStageComponent;
  let fixture: ComponentFixture<FunnelStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunnelStageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunnelStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
