import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core'; // Add ChangeDetectorRef
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../service/weather-services';
import { WeatherResponse } from '../model/weather-model';

@Component({
  selector: 'app-weather-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather-page.html',
  styleUrl: './weather-page.css',
})
export class WeatherPage implements OnInit {
  backgroundImage = 'assets/images/weather-light-dark.jpg';
  backgroundSize = 'cover';
  backgroundPosition = 'center';

  weatherData: WeatherResponse | null = null;
  loading = false;
  errorMessage = '';

  // city: string = 'Lagos';

  private weatherService = inject(WeatherService);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.fetchWeather('Lagos');
  }

  onSearch(city: string): void {
    if (!city || city.trim() === '') {
      this.errorMessage = 'Please enter a city name';
      return;
    }
    this.fetchWeather(city.trim());
  }

  fetchWeather(city: string): void {
    this.weatherData = null;
    this.errorMessage = '';
    this.loading = true;

    this.weatherService.getWeather(city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Weather API error:', error);
        this.errorMessage = 'Could not fetch weather data. Please try again.';
        this.loading = false;
        this.weatherData = null;
        this.cdr.detectChanges();
      },
    });
  }
}
