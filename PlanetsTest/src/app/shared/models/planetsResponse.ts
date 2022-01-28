import { Planet } from "./planetsInterface";

export interface PlanetsResponse {
  count: number;
  next: string;
  previous: string;
  results: Planet []

}
