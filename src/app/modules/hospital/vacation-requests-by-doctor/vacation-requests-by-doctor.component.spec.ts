import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationRequestsByDoctorComponent } from './vacation-requests-by-doctor.component';

describe('VacationRequestsByDoctorComponent', () => {
  let component: VacationRequestsByDoctorComponent;
  let fixture: ComponentFixture<VacationRequestsByDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacationRequestsByDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacationRequestsByDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
