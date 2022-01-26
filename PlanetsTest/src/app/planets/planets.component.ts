import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../shared/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  constructor(private planetsService:PlanetsService ) { }

  ngOnInit(): void {
    this.planetsService.getPlanets().subscribe(data =>{
      console.log(data)
    })
  }

}
