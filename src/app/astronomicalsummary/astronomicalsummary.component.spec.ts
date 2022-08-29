import { ComponentFixture, TestBed,waitForAsync } from '@angular/core/testing';
import { AstronomicalsummaryComponent } from './astronomicalsummary.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
//import { DataService } from './data.service';
import { NgxPaginationModule } from 'ngx-pagination';

describe('AstronomicalsummaryComponent', () => {
  let component: AstronomicalsummaryComponent;
  let fixture: ComponentFixture<AstronomicalsummaryComponent>;
  let httpMock: HttpTestingController;
  
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AstronomicalsummaryComponent ],
      imports: [
        HttpClientTestingModule,
        NgxPaginationModule
      ]
    })
    .compileComponents();
    httpMock = TestBed.get(HttpTestingController);
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(AstronomicalsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /*it(`should have a title 'AstronomicalsummaryComponent to display list of solar bodies'`, waitForAsync(() => {
    fixture = TestBed.createComponent(AstronomicalsummaryComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('AstronomicalsummaryComponent to display list of solar bodies');
  }));*/
});
