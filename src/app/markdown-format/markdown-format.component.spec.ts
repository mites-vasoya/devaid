import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownFormatComponent } from './markdown-format.component';

describe('MarkdownFormatComponent', () => {
  let component: MarkdownFormatComponent;
  let fixture: ComponentFixture<MarkdownFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarkdownFormatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkdownFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
