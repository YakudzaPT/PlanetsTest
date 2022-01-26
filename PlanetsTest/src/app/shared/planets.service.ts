import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  planetsUrl = 'https://swapi.dev/api';
  planetService: any;

  constructor(private http: HttpClient) { }

  getPlanets():Observable <any> {
    return this.http.get<Observable<any>>(this.planetsUrl+'/planets');
  }

}
