import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
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

  // State
  weatherData: WeatherResponse | null = null;
  loading = false;
  errorMessage = '';

  // Default city (so something loads on init)
  city: string = 'Lagos';

  // Inject service
  private weatherService = inject(WeatherService);

  ngOnInit(): void {
    this.fetchWeather(this.city); // load default city
  }

  // Search triggered from button
  onSearch(): void {
    if (!this.city || this.city.trim() === '') {
      this.errorMessage = 'Please enter a city name';
      return;
    }

    this.fetchWeather(this.city);
  }

  fetchWeather(city: string): void {
    this.loading = true;
    this.errorMessage = '';

    // timer to auto-hide loader
    setTimeout(() => {
      this.loading = false;
    }, 100);

    this.weatherService.getWeather(city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.loading = false; // just in case it already finished
      },
      error: () => {
        this.errorMessage = 'Could not fetch weather data. Try again.';
        this.loading = false;
      },
    });
  }
}
