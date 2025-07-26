import { TestBed } from '@angular/core/testing';

import { GeoLocation } from './geolocation';

describe('Location', () => {
  let service: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Location);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
