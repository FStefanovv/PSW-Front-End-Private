import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsByDoctorComponent } from './appointments-by-doctor.component';

describe('AppointmentsByDoctorComponent', () => {
  let component: AppointmentsByDoctorComponent;
  let fixture: ComponentFixture<AppointmentsByDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentsByDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentsByDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
