import { Component, OnInit } from '@angular/core';
import { GetcitiesService } from '../../services/getcities.service';
import { CityInfo } from './city-info';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent implements OnInit {

  cities!: CityInfo[];
  //color: boolean | undefined; 
  color!: boolean[]; 

  constructor(private citiesService: GetcitiesService) {
  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.cities = this.citiesService.getAllCities();
    this.color = this.colorIt();
  }

  /*colorIt(): boolean {
    for(let i=0; i < this.cities.length; i++) {
      if (this.cities[i].attractionSites.length < 3) {
        return false; // return false < 3 of attractions
      }
    }
    return true; // return true >= 3 of attractions
  } */

  colorIt(): boolean[] {
    let colorStyle: boolean[] = [];

    for(let i=0; i < this.cities.length; i++) {
      if (this.cities[i].attractionSites.length < 3) {
        colorStyle[i] = false; // return false < 3 of attractions
      } else {
        colorStyle[i] = true; // return true >= 3 of attractions
      }
    }
    return colorStyle;
  }
}
