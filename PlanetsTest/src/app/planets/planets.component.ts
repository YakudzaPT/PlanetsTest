import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { People } from '../shared/models/peopleInterface';
import { Planet } from '../shared/models/planetsInterface';
import { PlanetsService } from '../shared/Services/planets.service';
import { PeopleDialogComponent } from './people-dialog/people-dialog.component';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  public planets: Planet []= [];
  public selectedPlanet: Planet | undefined;

  constructor(private planetsService:PlanetsService,public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.planetsService.getPlanets().subscribe(data =>{
      this.planets = data.results;
      console.log(data)
    })
  }


  openDialog() {
    var people: People []= [];
     this.selectedPlanet?.residents.forEach( residentUrl=> {
     this.planetsService.getPeople(residentUrl).subscribe( resident =>{
        people.push(resident)
        if(people.length==this.selectedPlanet?.residents.length){
          this.dialog.open(PeopleDialogComponent, {
            data: people
          });
        }

      })

    })
    

  }

}
