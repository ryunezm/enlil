import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

// Interface describing the structure of a response from OpenWeather from latitude and longitude args
export interface WeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  rain?: {
    '1h': number;
  };
  snow?: {
    '1h': number;
  }
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

@Injectable({
  providedIn: 'root'
})
export class Openweather {
  private apiKey = '0a79738301d1226dc739c86a9ff5ad3a';
  private apiGeoUrl = 'http://api.openweathermap.org/geo/1.0/direct';
  private apiWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {
  }

  /**
   * Gets geographic coordinates for a given city.
   * More info: https://openweathermap.org/api/geocoding-api
   * @param city Name of the city to search for
   * @param limit Maximum number of results (default 5)
   * @returns Observable with the geographic data
   */

  /*
  getCoordinatesByCity(city: string, limit: number = 5): Observable<any> {
    const params = {
      q: city,
      limit: limit.toString(),
      appid: this.apiKey
    };
    return this.http.get(this.apiGeoUrl, {params});
  }
   */

  /**
   * Gets weather data from the coordinates of a city.
   * More info: https://openweathermap.org/current
   * @param lat Latitude of the city
   * @param lon Longitude of the city
   * @returns Observable with weather data
   */
  getCurrentWeatherByLatLon(lat: number, lon: number): Observable<WeatherResponse> {
    const params = {
      lat: lat.toString(),
      lon: lon.toString(),
      appid: this.apiKey
    }

    return this.http.get<WeatherResponse>(this.apiWeatherUrl, {params})
  }

  /**
   *
   * @param city Standard city name.
   * @returns
   */
  /*
  getCurrentWeatherByCity(city: string): Observable<any> {
    const params = {
      q: city,
      appid: this.apiKey
    }

    return this.http.get(this.apiWeatherUrl, {params})
  }
  */
}
