import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Options } from '../interface';

@Component({
  selector: 'app-astronomicalsummary',
  templateUrl: './astronomicalsummary.component.html',
  styleUrls: ['./astronomicalsummary.component.css']
})
export class AstronomicalsummaryComponent implements OnInit {
  SolarBodies:any = null;  

  options: Options = {
    orderBy: 'id',
    orderDir: 'desc',
    page: 1,
    search: '',
    size: 5
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void

  {
    //console.log("ngOnInit");
    this.loadSolarBodies();
  }

  loadSolarBodies() {
    return this.dataService.GetAllSolarBodies().subscribe(
      (data: {}) => {
      
      this.SolarBodies = data;
      console.log(" The response in component is "+this.SolarBodies.bodies);
    })
  }

  /*size(size: number) {
    //console.log("size");
    this.options.size = size;
    this.options.page = 1;
    this.loadSolarBodies();
  }

  order(by: string) {
    //console.log("order");
    if (this.options.orderBy === by) {
      this.options.orderDir = this.options.orderDir === 'asc' ? 'desc' : 'asc';
    } else {
      this.options.orderBy = by;
    }
    this.loadSolarBodies();
  }
  
  by(order: string) {
    //console.log("by");
    return this.options.orderBy === order;
  }
  
  get direction() {
    //console.log("direction");
    return this.options.orderDir === 'asc' ? '?' : '?';
  }

  get numbers(): number[] {
    //console.log("numbers");
    const limit = Math.ceil((this.SolarBodies && this.SolarBodies.filtered) / this.options.size);
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
  }

  search($event: any): void {
    const text = $event.target.value;
    this.options.search = text;
    this.options.page = 1;
    this.loadSolarBodies();
  }
  */

}
