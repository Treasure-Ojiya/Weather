import { TestBed } from '@angular/core/testing';

import { WeatherServices } from './weather-services';

describe('WeatherServices', () => {
  let service: WeatherServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
