import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotpGeneratorComponent } from './totp-generator.component';

describe('TotpGeneratorComponent', () => {
  let component: TotpGeneratorComponent;
  let fixture: ComponentFixture<TotpGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotpGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotpGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
