import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherServices {
  private apiKey=''
  private apiUrl='https://api.openweathermap.org/data/3.0/onecall'

}
