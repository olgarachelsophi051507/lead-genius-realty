import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeSheetComponent } from './income-sheet.component';

describe('IncomeSheetComponent', () => {
  let component: IncomeSheetComponent;
  let fixture: ComponentFixture<IncomeSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
