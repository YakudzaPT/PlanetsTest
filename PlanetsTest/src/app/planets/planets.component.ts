import { Component, OnInit } from '@angular/core';
import { Planets } from '../shared/models/planetsInterface';
import { PlanetsService } from '../shared/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  public planets: Planets []= [];
  public selectedPlanets: Planets | undefined;

  constructor(private planetsService:PlanetsService ) { }

  ngOnInit(): void {
    this.planetsService.getPlanets().subscribe(data =>{
      this.planets = data.results;
      console.log(data)
    })
  }

}
