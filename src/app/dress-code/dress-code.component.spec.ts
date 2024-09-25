import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressCodeComponent } from './dress-code.component';

describe('DressCodeComponent', () => {
  let component: DressCodeComponent;
  let fixture: ComponentFixture<DressCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DressCodeComponent]
    });
    fixture = TestBed.createComponent(DressCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
