import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronomicaldetailComponent } from './astronomicaldetail.component';

describe('AstronomicaldetailComponent', () => {
  let component: AstronomicaldetailComponent;
  let fixture: ComponentFixture<AstronomicaldetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstronomicaldetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstronomicaldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
