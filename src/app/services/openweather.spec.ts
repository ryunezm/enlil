import { TestBed } from '@angular/core/testing';

import { Openweather } from './openweather';

describe('Openweather', () => {
  let service: Openweather;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Openweather);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
