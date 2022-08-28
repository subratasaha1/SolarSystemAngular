import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronomicalsummaryComponent } from './astronomicalsummary.component';

describe('AstronomicalsummaryComponent', () => {
  let component: AstronomicalsummaryComponent;
  let fixture: ComponentFixture<AstronomicalsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstronomicalsummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstronomicalsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
