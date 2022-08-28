import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-astronomicaldetail',
  templateUrl: './astronomicaldetail.component.html',
  styleUrls: ['./astronomicaldetail.component.css']
})
export class AstronomicaldetailComponent implements OnInit {

  SolarBody:any = {}
  id = this.actRoute.snapshot.params['id'];

  constructor(private dataService: DataService,
    private actRoute: ActivatedRoute,
    private router: Router) { 
    
  }

  ngOnInit(): void {
    this.loadSolarBody();
  }
  loadSolarBody() {
    return this.dataService.GetSolarBodyDetailById(this.id).subscribe((data: {}) => {
      this.SolarBody = data;
    })
  }

}
