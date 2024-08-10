import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JSONFormatterComponent } from './jsonformatter.component';

describe('JSONFormatterComponent', () => {
  let component: JSONFormatterComponent;
  let fixture: ComponentFixture<JSONFormatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JSONFormatterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JSONFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
