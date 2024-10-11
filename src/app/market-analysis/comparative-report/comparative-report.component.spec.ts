import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativeReportComponent } from './comparative-report.component';

describe('ComparativeReportComponent', () => {
  let component: ComparativeReportComponent;
  let fixture: ComponentFixture<ComparativeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparativeReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparativeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
