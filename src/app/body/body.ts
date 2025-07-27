import {Component} from '@angular/core';
import {AsyncPipe, DatePipe, DecimalPipe, TitleCasePipe} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import {CityResult, Nominatim} from '../services/nominatim';
import {Openweather, WeatherResponse} from '../services/openweather';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-body',
  imports: [
    AsyncPipe,
    DatePipe,
    DecimalPipe,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    TitleCasePipe
  ],
  templateUrl: './body.html',
  styleUrl: './body.scss'
})
export class Body {
  value = '';
  selectedCity?: CityResult;
  results$: Observable<CityResult[]> = of([]);
  weatherResponse$: Observable<WeatherResponse> = of();

  constructor(private nominatim: Nominatim, private openweather: Openweather) {}

  searchCity() {
    if(!this.value.trim()) return;
    this.results$ = this.nominatim.searchFlexible(this.value);
  }

  selectCity(city: CityResult) {
    this.selectedCity = city;
    console.log('Selected city:', this.selectedCity);
    this.getWeatherFromSelectedCity();
  }

  getWeatherFromSelectedCity() {
    if(!this.selectedCity?.lat || !this.selectedCity?.lon) return;

    const latitude = parseFloat(this.selectedCity?.lat);
    const longitude = parseFloat(this.selectedCity?.lon);  
    this.weatherResponse$ = this.openweather.getCurrentWeatherByLatLon(latitude, longitude);
    console.log(this.weatherResponse$);
  }  
}
