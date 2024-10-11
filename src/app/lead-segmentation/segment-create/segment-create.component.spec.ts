import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentCreateComponent } from './segment-create.component';

describe('SegmentCreateComponent', () => {
  let component: SegmentCreateComponent;
  let fixture: ComponentFixture<SegmentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegmentCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegmentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
