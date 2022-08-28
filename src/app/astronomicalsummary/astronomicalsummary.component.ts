import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Options } from '../interface';

@Component({
  selector: 'app-astronomicalsummary',
  templateUrl: './astronomicalsummary.component.html',
  styleUrls: ['./astronomicalsummary.component.css']
})
export class AstronomicalsummaryComponent implements OnInit {

  SolarBodies:any = [];
  p: number = 1;
  total: number = 287;

  /*options: Options = {
    orderBy: 'id',
    orderDir: 'asc',
    page: 1,
    search: '',
    size: 10
  };*/

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
  /*search($event: any): void {
    const text = $event.target.value;
    this.options.search = text;
    this.options.page = 1;
    this.loadSolarBodies();
  }
  size($event: any) {
    this.options.size = Number($event.target.value);
    this.options.page = 1;
    this.loadSolarBodies();
  }

  order(by: string) {
    if (this.options.orderBy === by) {
      this.options.orderDir = this.options.orderDir === 'asc' ? 'desc' : 'asc';
    } else {
      this.options.orderBy = by;
    }
    this.loadSolarBodies();
  }
  
  by(order: string) {
    return this.options.orderBy === order;
  }
  
  get direction() {
    return this.options.orderDir === 'asc' ? '?' : '?';
  }
  get numbers(): number[] {
    const limit = Math.ceil((283 && 283) / this.options.size);
    //const limit = 5
    return Array.from({ length: limit }, (_, i) => i + 1);
  }
  
  next() {
    this.options.page++;
    this.loadSolarBodies();
  }
  
  prev() {
    this.options.page--;
    this.loadSolarBodies();
  }
  to(page: number) {
    this.options.page = page;
    this.loadSolarBodies();
  }*/
  pageChangeEvent(event: number){
    this.p = event;
    //this.options.page = this.p;
    this.loadSolarBodies();
}


}
