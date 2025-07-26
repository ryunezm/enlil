import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeoLocation {

  getCurrentLocation(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject('Geolocation not supported')
      } else {
        navigator.geolocation.getCurrentPosition(resolve, reject, {enableHighAccuracy: false, timeout: 5000})
      }
    })
  }

}
