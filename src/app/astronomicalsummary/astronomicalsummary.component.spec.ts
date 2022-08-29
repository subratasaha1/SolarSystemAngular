import { ComponentFixture, TestBed,waitForAsync } from '@angular/core/testing';
import { AstronomicalsummaryComponent } from './astronomicalsummary.component';
import { DataService } from '../data.service';

describe('AstronomicalsummaryComponent', () => {
  let component: AstronomicalsummaryComponent;
  let fixture: ComponentFixture<AstronomicalsummaryComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstronomicalsummaryComponent ],
      providers: [DataService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstronomicalsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
  it(`should have a title 'AstronomicalsummaryComponent to display list of solar bodies'`, waitForAsync(() => {
    fixture = TestBed.createComponent(AstronomicalsummaryComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('AstronomicalsummaryComponent to display list of solar bodies');
  }));
});
