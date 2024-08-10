import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexStringGeneratorComponent } from './hex-string-generator.component';

describe('HexStringGeneratorComponent', () => {
  let component: HexStringGeneratorComponent;
  let fixture: ComponentFixture<HexStringGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HexStringGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HexStringGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
