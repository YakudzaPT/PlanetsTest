import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanetsResponse } from './models/planetsResponse';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  planetsUrl = 'https://swapi.dev/api';
  planetService: any;

  constructor(private http: HttpClient) { }

  getPlanets():Observable <PlanetsResponse> {
    return this.http.get<PlanetsResponse>(this.planetsUrl+'/planets');
  }

}
