import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Openweather {
  private apiKey = '0a79738301d1226dc739c86a9ff5ad3a';
  private apiGeoUrl = 'http://api.openweathermap.org/geo/1.0/direct';
  private apiWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  /**
 * Gets geographic coordinates for a given city.
 * More info: https://openweathermap.org/api/geocoding-api
 * @param city Name of the city to search for
 * @param limit Maximum number of results (default 5)
 * @returns Observable with the geographic data
 */
  getCoordinatesByCity(city: string, limit: number = 5): Observable<any> {
    const params = {
      q: city,
      limit: toString(),
      appid: this.apiKey
    };
    return this.http.get(this.apiGeoUrl, { params });
  }

  /**
   * Gets weather data from the coordinates of a city.
   * More info: https://openweathermap.org/current
   * @param lat Latitude of the city
   * @param lon Longitude of the city
   * @returns Observable with weather data
   */
  getCurrentWeatherByLatLon(lat: number, lon: number): Observable<any> {
    const params = {
      lat: lat.toString(),
      lon: lon.toString(),
      appid: this.apiKey
    }

    return this.http.get(this.apiWeatherUrl, { params })
  }

  /**
   * 
   * @param city Standard city name.
   * @returns 
   */
  getCurrentWeatherByCity(city: string): Observable<any> {
    const params = {
      q: city,
      appid: this.apiKey
    }
    
    return this.http.get(this.apiWeatherUrl, { params })
  }
}
