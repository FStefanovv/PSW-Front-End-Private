import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppForOtherDocComponent } from './app-for-other-doc.component';

describe('AppForOtherDocComponent', () => {
  let component: AppForOtherDocComponent;
  let fixture: ComponentFixture<AppForOtherDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppForOtherDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppForOtherDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
