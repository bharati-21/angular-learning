import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  // template: '<h1>This is an inline template',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // styles: ['h1 { color: blueviolet; font-family: sans-serif }'],
})
export class AppComponent {
  hotelName = 'Park Avenue';
  role = 'Users';
}

// Structural Directives: change behavior of DOM: remove, add elements - more costly E.g. *ngIf, *ngFor, *ngSwitch
