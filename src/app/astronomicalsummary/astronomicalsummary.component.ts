import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-astronomicalsummary',
  templateUrl: './astronomicalsummary.component.html',
  styleUrls: ['./astronomicalsummary.component.css']
})
export class AstronomicalsummaryComponent implements OnInit {

  SolarBodies:any = [];
  p: number = 1;
  total: number = 287;
  title="AstronomicalsummaryComponent to display list of solar bodies";
  
  constructor(private dataService: DataService) { }

  ngOnInit()
  {
    this.loadSolarBodies();
  }

  loadSolarBodies() {
    return this.dataService.GetAllSolarBodies(this.p).subscribe((data: {}) => {
      this.SolarBodies = data;
    })
  }
 pageChangeEvent(event: number){
    this.p = event;
    this.loadSolarBodies();
  }


}
