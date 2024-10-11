import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeExportComponent } from './income-export.component';

describe('IncomeExportComponent', () => {
  let component: IncomeExportComponent;
  let fixture: ComponentFixture<IncomeExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeExportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
