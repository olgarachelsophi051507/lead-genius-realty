import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialArticleComponent } from './tutorial-article.component';

describe('TutorialArticleComponent', () => {
  let component: TutorialArticleComponent;
  let fixture: ComponentFixture<TutorialArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
