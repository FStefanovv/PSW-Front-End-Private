import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowConsiliumsComponent } from './show-consiliums.component';

describe('ShowConsiliumsComponent', () => {
  let component: ShowConsiliumsComponent;
  let fixture: ComponentFixture<ShowConsiliumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowConsiliumsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowConsiliumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
