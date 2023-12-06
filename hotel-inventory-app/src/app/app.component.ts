import { Component } from '@angular/core';
import { Rooms } from './rooms/rooms';

@Component({
  selector: 'hinv-root',
  // template: '<h1>This is an inline template',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // styles: ['h1 { color: blueviolet; font-family: sans-serif }'],
})
export class AppComponent {
  hotelName = 'Park Avenue';
  numberOfRooms = 10;
  hideNumRooms = false;

  rooms: Rooms = {
    available: 10,
    booked: 5,
    total: 20,
  };

  toggle() {
    this.hideNumRooms = !this.hideNumRooms;
  }
}

// Structural Directives: change behavior of DOM: remove, add elements - more costly E.g. *ngIf, *ngFor, *ngSwitch
