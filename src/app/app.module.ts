import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AstronomicalsummaryComponent } from './astronomicalsummary/astronomicalsummary.component';
import { DataService } from './data.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { AstronomicaldetailComponent } from './astronomicaldetail/astronomicaldetail.component';

@NgModule({
  declarations: [
    AppComponent,
    AstronomicalsummaryComponent,
    AstronomicaldetailComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
