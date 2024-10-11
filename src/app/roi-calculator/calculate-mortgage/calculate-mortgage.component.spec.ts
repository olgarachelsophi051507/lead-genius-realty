import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateMortgageComponent } from './calculate-mortgage.component';

describe('CalculateMortgageComponent', () => {
  let component: CalculateMortgageComponent;
  let fixture: ComponentFixture<CalculateMortgageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateMortgageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateMortgageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
