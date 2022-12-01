import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientOnTreatmentComponent } from './patient-on-treatment.component';

describe('PatientOnTreatmentComponent', () => {
  let component: PatientOnTreatmentComponent;
  let fixture: ComponentFixture<PatientOnTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientOnTreatmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientOnTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
