import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapierSetupComponent } from './zapier-setup.component';

describe('ZapierSetupComponent', () => {
  let component: ZapierSetupComponent;
  let fixture: ComponentFixture<ZapierSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZapierSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZapierSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
