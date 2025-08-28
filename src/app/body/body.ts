// Required imports from Angular, Angular Material, and custom services
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
    // Angular and Material modules and pipes used in the component template
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
  // Input value for city search
  value = '';

  // Currently selected city from the results
  selectedCity?: CityResult;

  // Observable emitting the search results for cities
  results$: Observable<CityResult[]> = of([]);

  // Observable holding the weather data
  weatherResponse$: Observable<WeatherResponse> = of();

  // Dependency injection of geolocation and weather services
  constructor(private nominatim: Nominatim, private openweather: Openweather) {
  }

  // Search cities based on the input value
  searchCity() {
    if (!this.value.trim()) return; // Prevent search if input is empty
    this.results$ = this.nominatim.searchFlexible(this.value); // Fetch matching cities
  }

  // Handle city selection from the result list
  selectCity(city: CityResult) {
    this.selectedCity = city;
    console.log('Selected city:', this.selectedCity);
    this.getWeatherFromSelectedCity(); // Fetch weather data for selected city
  }

  // Retrieve weather data based on the selected city's coordinates
  getWeatherFromSelectedCity() {
    if (!this.selectedCity?.lat || !this.selectedCity?.lon) return; // Ensure coordinates exist

    const latitude = parseFloat(this.selectedCity?.lat);
    const longitude = parseFloat(this.selectedCity?.lon);

    this.weatherResponse$ = this.openweather.getCurrentWeatherByLatLon(latitude, longitude);

    // Subscribe to log response or catch errors
    this.weatherResponse$.subscribe({
      next: (data => console.log(data)),
      error: (err) =>
        console.warn(`No data found for given coordinates (${latitude},${longitude}).`, err)
    });
  }
}
