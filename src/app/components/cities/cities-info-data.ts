import { Iweather } from "../weather/iweather";
import { CityInfo } from "./city-info";

export const CitiesInfo: CityInfo[] = [
    {name: "Aswan", attractionSites:["Abu-Simble", "Nubian Museum", "Elephantine"]},
    {name: "Ciaro", attractionSites:["The Pyramids", "Nile", "Khan elKhalili"]},
    {name: "Luxor", attractionSites:["Valley of the Kings", "Karnak", "Luxor Template"]},
    {name: "Sharm El-Sheikh", attractionSites:["Naama", "Ras Muhammad National Park"]},
];

/*
export const citiesWeather = [
    {name: "Aswan", springN: 23, springM:40, summerN:28, summerM:43, winterN:12, winterM:25, autumN:22, autumnM:36, visitFrom:"October", visitTo:"April"},
    {name: "Ciaro", springN: 18, springM:30, summerN:23, summerM:35, winterN:10, winterM:20, autumN:20, autumnM:30, visitFrom:"December", visitTo:"January"},
    {name: "Luxor", springN: 17, springM:35, summerN:25, summerM:41, winterN:8, winterM:24, autumN:13, autumnM:29, visitFrom:"October", visitTo:"April"},
    {name: "Sharm El-Sheikh", springN: 21, springM:30, summerN:29, summerM:38, winterN:16, winterM:24, autumN:20, autumnM:28, visitFrom:"October", visitTo:"November"}
];*/

export const citiesWeather:Iweather[] = [
    {name: "Aswan", springN: 23, springM:40, summerN:28, summerM:43, winterN:12, winterM:25, autumN:22, autumM:36, visitFrom:"October", visitTo:"April"},
    {name: "Ciaro", springN: 18, springM:30, summerN:23, summerM:35, winterN:10, winterM:20, autumN:20, autumM:30, visitFrom:"December", visitTo:"January"},
    {name: "Luxor", springN: 17, springM:35, summerN:25, summerM:41, winterN:8, winterM:24, autumN:13, autumM:29, visitFrom:"October", visitTo:"April"},
    {name: "Sharm El-Sheikh", springN: 21, springM:30, summerN:29, summerM:38, winterN:16, winterM:24, autumN:20, autumM:28, visitFrom:"October", visitTo:"November"}
];

