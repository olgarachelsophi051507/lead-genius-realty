import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunnelViewComponent } from './funnel-view.component';

describe('FunnelViewComponent', () => {
  let component: FunnelViewComponent;
  let fixture: ComponentFixture<FunnelViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunnelViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunnelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
