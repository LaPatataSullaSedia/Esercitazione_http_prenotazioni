import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenComponent } from './pren.component';

describe('PrenComponent', () => {
  let component: PrenComponent;
  let fixture: ComponentFixture<PrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
