// // weather.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { WeatherResponse } from '../model/weather-model';
// import { environment } from '../environments/weather-environment';

// @Injectable({
//   providedIn: 'root',
// })
// export class WeatherService {
//   private apiUrl = environment.apiUrl; // already defined in environment.ts

//   constructor(private http: HttpClient) {}

//   // Get current weather (and forecast if available)
//   // getWeather(city: string): Observable<WeatherResponse> {
//   //   return this.http.get<WeatherResponse>(
//   //     `${this.apiUrl}?q=${city}&days=8&aqi=no&alerts=no`
//   //   );
//   // }

//   getWeather(city: string): Observable<WeatherResponse> {
//     return this.http.get<WeatherResponse>(
//       `${this.apiUrl}/weather?q=${city}&days=8&aqi=no&alerts=no`
//     );
//   }
// }

// weather.service.ts
// weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../model/weather-model';
import { environment } from '../environments/weather-environment';

@Injectable({
  providedIn: 'root',
})
// export class WeatherService {
//   private apiUrl = environment.apiUrl; // https://weather-api-19wq.onrender.com

//   constructor(private http: HttpClient) {}

//   // weather.service.ts
//   getWeather(): Observable<WeatherResponse> {
//     return this.http.get<WeatherResponse>('/api');
//   }
// }
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://weather-api-19wq.onrender.com';

  constructor(private http: HttpClient) {}

  // Pass location dynamically
  getWeather(city: string): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(
      `${this.apiUrl}?location=${encodeURIComponent(city)}`
    );
  }
}
