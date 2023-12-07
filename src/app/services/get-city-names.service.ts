import { Injectable } from '@angular/core';
import { GetweatherService } from './getweather.service';
import { Iweather } from '../components/weather/iweather';

@Injectable({
  providedIn: 'root'
})
export class GetCityNamesService {

  arrayWeather!: Iweather[];
  arrayNames: string[] = [];

  constructor(private getweatherService: GetweatherService) { 
  }

  getNames():string[] {
    if (this.arrayNames.length == 0) {
      this.arrayWeather = this.getweatherService.getWeather();
      for (let i=0; i < this.arrayWeather.length; i++) {
        this.arrayNames.push(this.arrayWeather[i].name);
      }  
    }
    return this.arrayNames;
  }
}
