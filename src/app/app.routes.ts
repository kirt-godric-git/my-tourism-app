import { Routes } from '@angular/router';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { HomeComponent } from './components/home/home.component';
import { CitiesComponent } from './components/cities/cities.component';
import { TechIdeasComponent } from './components/tech-ideas/tech-ideas.component';
import { NotFoundRouteComponent } from './components/not-found-route/not-found-route.component';
import { WeatherComponent } from './components/weather/weather.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "cities", component: CitiesComponent},
    {path: "weather", component: WeatherComponent},
    {path: "weather/:name/:springN/:springM/:summerN/:summerM/:winterN/:winterM/:autumN/:autumM/:visitFrom/:visitTo", component: WeatherDetailsComponent},
    {path: "techideas", component: TechIdeasComponent},
    // Warning: Do not put this as the first item!!! Use this as last item.
    {path: '**', component: NotFoundRouteComponent}  
];
