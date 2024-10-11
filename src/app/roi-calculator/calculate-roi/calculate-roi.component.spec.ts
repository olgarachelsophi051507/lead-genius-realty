import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateRoiComponent } from './calculate-roi.component';

describe('CalculateRoiComponent', () => {
  let component: CalculateRoiComponent;
  let fixture: ComponentFixture<CalculateRoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateRoiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateRoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
