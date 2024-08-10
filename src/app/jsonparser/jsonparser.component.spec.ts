import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JSONParserComponent } from './jsonparser.component';

describe('JSONParserComponent', () => {
  let component: JSONParserComponent;
  let fixture: ComponentFixture<JSONParserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JSONParserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JSONParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
