import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {CityResult, Nominatim} from '../services/nominatim';

@Component({
  selector: 'app-body',
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule
  ],
  templateUrl: './body.html',
  styleUrl: './body.scss'
})
export class Body {
  value = '';

  constructor(private nominatim: Nominatim) {}

  searchCity() {
    if(!this.value.trim()) return;
    this.nominatim.searchFlexible(this.value).subscribe((results: CityResult[])=> {console.log(results)});
  }
}
