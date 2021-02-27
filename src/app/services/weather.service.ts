import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService
{

  baseUrl = "api.openweathermap.org/data/2.5/weather?q=";

  constructor() { }


}
