import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDiffCheckerComponent } from './text-diff-checker.component';

describe('TextDiffCheckerComponent', () => {
  let component: TextDiffCheckerComponent;
  let fixture: ComponentFixture<TextDiffCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextDiffCheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextDiffCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
