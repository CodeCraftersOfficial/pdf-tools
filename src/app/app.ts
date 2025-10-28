import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
    goTo(url: string) {
    window.open(url, '_blank'); // Opens in a new tab
  }
}
