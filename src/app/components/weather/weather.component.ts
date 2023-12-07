import { Component, OnInit } from '@angular/core';
import { GetweatherService } from '../../services/getweather.service';
import { Iweather } from './iweather';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {

  //weatherData!: { name: string; springN: number; springM: number; summerN: number; summerM: number; winterN: number; winterM: number; autumN: number; autumnM: number; visitFrom: string; visitTo: string; }[];
  weatherData!: Iweather[];

  constructor(private weatherService: GetweatherService) {

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.weatherData = this.weatherService.getWeather();
  }
}
