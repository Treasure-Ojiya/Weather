import { Routes } from '@angular/router';
import { WelcomePage } from './welcome-page/welcome-page';
import { WeatherPage } from './weather-page/weather-page';

export const routes: Routes = [
  {
    path: '',
    component: WelcomePage,
  },
  {
    path: 'weather',
    component: WeatherPage,
  },
];
