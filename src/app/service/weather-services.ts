// weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap, delay } from 'rxjs'; // Add delay
import { WeatherResponse } from '../model/weather-model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://weather-api-19wq.onrender.com';
  private cache = new Map<
    string,
    { data: WeatherResponse; timestamp: number }
  >();
  private readonly CACHE_DURATION = 10 * 60 * 1000;

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<WeatherResponse> {
    const normalizedCity = city.toLowerCase().trim();

    const cached = this.cache.get(normalizedCity);
    if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
      return of(cached.data).pipe(delay(0));
    }

    return this.http
      .get<WeatherResponse>(
        `${this.apiUrl}?location=${encodeURIComponent(city)}`
      )
      .pipe(
        tap((data) => {
          this.cache.set(normalizedCity, {
            data,
            timestamp: Date.now(),
          });
        })
      );
  }
}
