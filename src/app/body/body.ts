import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import {CityResult, Nominatim} from '../services/nominatim';
import {Observable, of} from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-body',
  imports: [
    AsyncPipe,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatListModule
  ],
  templateUrl: './body.html',
  styleUrl: './body.scss'
})
export class Body {
  value = '';
  results$: Observable< CityResult[]> = of([]);
  selectedCity?: CityResult;

  constructor(private nominatim: Nominatim) {}

  searchCity() {
    if(!this.value.trim()) return;
    this.results$ = this.nominatim.searchFlexible(this.value);
  }

  selectCity(city: CityResult) {
    this.selectedCity = city;
    console.log('Selected city:', this.selectedCity);
  }
}
