import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AstronomicaldetailComponent } from './astronomicaldetail.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterModule, Routes } from '@angular/router';

describe('AstronomicaldetailComponent', () => {
  let component: AstronomicaldetailComponent;
  let fixture: ComponentFixture<AstronomicaldetailComponent>;
  let httpMock: HttpTestingController;
  const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'astronomical-detail/:id', component: AstronomicaldetailComponent }
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstronomicaldetailComponent ],
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot(routes)
      ]
    })
    .compileComponents();
    httpMock = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(AstronomicaldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
