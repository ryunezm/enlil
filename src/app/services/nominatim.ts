import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { last, map, Observable } from 'rxjs';

// Interface describing the structure of a response from Nominatim
interface CityResult {
  name?: string;
  display_name: string;
  lat: string;
  lon: string;
  address?: {
    city?: string;
    town?: string;
    [key: string]: any;
  };
}

@Injectable({
  providedIn: 'root'
})
export class Nominatim {
private readonly apiUrl = 'https://nominatim.openstreetmap.org/search';

constructor(private http: HttpClient) {}

/**
   * Performs a flexible full-text search using a free-form query.
   * Useful when the input might contain a city, country, or other descriptors in any order.
   * @param query A string like "Bogotá, Colombia"
   */
searchFlexible(query: string): Observable<CityResult[]> {
  const params = new HttpParams()
  .set('q', query)
  .set('format', 'json')
  .set('limit', '10')
  .set('addressdetails', '1');

  return this.http.get<CityResult[]>(this.apiUrl, { params })
  .pipe(
    map(results => results
      .map(result=>({
        name: result.name ?? result.address?.city ?? result.address?.town ?? '',
      display_name: result.display_name,
    lat: result.lat,
  lon: result.lon})))
  );
}

/**
   * Performs a structured search using separated city and country fields.
   * More precise than the flexible query and recommended when both parts are known.
   * @param city The city name (e.g., "Bogotá")
   * @param country The country name (e.g., "Colombia")
   */
searchStructured(city: string, country: string): Observable<CityResult[]> {
  const params = new HttpParams()
  .set('city', city)
  .set('country', country)
  .set('format', 'json')
  .set('limit', '10')
  .set('addressdetails', '1');
  
  return this.http.get<CityResult[]>(this.apiUrl, { params })
  .pipe(
    map(results => results
      .map(result => ({
        name: result.name ?? result.address?.city ?? result.address?.town ?? '',
        display_name: result.display_name,
        lat: result.lat,
        lon: result.lon
      })))
  );
}
}
