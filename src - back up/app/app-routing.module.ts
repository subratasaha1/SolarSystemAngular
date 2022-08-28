import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstronomicalsummaryComponent } from './astronomicalsummary/astronomicalsummary.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: AstronomicalsummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
