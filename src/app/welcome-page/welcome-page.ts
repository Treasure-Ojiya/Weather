import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { RouterLink } from "../../../node_modules/@angular/router/router_module.d";

@Component({
  selector: 'app-welcome-page',
  imports: [RouterLink],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.css',
})
export class WelcomePage {
  protected readonly title = signal('Weather');
}
