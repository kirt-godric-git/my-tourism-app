import { Component } from '@angular/core';
import { Iweather } from '../weather/iweather';
import { ActivatedRoute } from '@angular/router';
import { ImportantTextDirective } from '../../directives/important-text.directive';

@Component({
  selector: 'app-weather-details',
  standalone: true,
  imports: [ImportantTextDirective],
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.css'
})
export class WeatherDetailsComponent implements Iweather {
  name!: string; 
  springN!: number; 
  springM!: number; 
  summerN!: number; 
  summerM!: number; 
  winterN!: number; 
  winterM!: number; 
  autumN!: number; 
  autumM!: number; 
  visitFrom!: string; 
  visitTo!: string;
  
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      this.springN = params['springN'];
      this.springM = params['springM'];
      this.summerN = params['summerN'];
      this.summerM = params['summerM'];
      this.winterN = params['winterN'];
      this.winterM = params['winterM'];
      this.autumN = params['autumN'];
      this.autumM = params['autumM'];
      this.visitFrom = params['visitFrom'];
      this.visitTo = params['visitTo'];
    });
  }
}
