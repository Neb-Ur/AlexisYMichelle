import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartSpinnerComponent } from './heart-spinner.component';

describe('HeartSpinnerComponent', () => {
  let component: HeartSpinnerComponent;
  let fixture: ComponentFixture<HeartSpinnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeartSpinnerComponent]
    });
    fixture = TestBed.createComponent(HeartSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
