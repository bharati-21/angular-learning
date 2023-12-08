import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Room, Rooms } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
  // encapsulation: ViewEncapsulation.None,
})
export class RoomsComponent implements OnInit {
  numberOfRooms = 10;
  hideNumRooms = false;
  selectedRoom!: Room;
  title = 'Room List';

  rooms: Rooms = {
    available: 10,
    booked: 5,
    total: 20,
  };

  roomList: Room[] = [];

  toggle() {
    this.hideNumRooms = !this.hideNumRooms;
    this.title = 'Rooms List';
  }

  ngOnInit(): void {
    this.roomList = [
      {
        roomNo: 1,
        roomType: 'Deluxe',
        amenities:
          'Air conditioner, Free Wi-Fi, Telivision, Washing machine, Bathroom, Kitchen',
        price: 1000,
        image:
          'https://plus.unsplash.com/premium_photo-1670360414903-19e5832f8bc4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        checkInTime: new Date('12-10-2023 12:00:00'),
        checkOutTime: new Date('12-15-2023 12:00:00'),
        available: false,
        rating: 3.7,
      },
      {
        roomNo: 2,
        roomType: 'Deluxe',
        amenities:
          'Air conditioner, Free Wi-Fi, Telivision, Washing machine, Bathroom, Kitchen',
        price: 1000,
        image:
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        available: true,
        rating: 2.6,
      },
      {
        roomNo: 3,
        roomType: 'Suite',
        amenities:
          'Air conditioner, Free Wi-Fi, Telivision, Washing machine, Bathroom, Kitchen, Swimming Pool, Mini Bar',
        price: 5000,
        image:
          'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        available: true,
        rating: 4.3,
      },
    ];
  }

  selectRoom(room: Room) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {
    const room: Room = {
      roomNo: this.roomList.length + 1,
      roomType: 'Deluxe',
      amenities:
        'Air conditioner, Free Wi-Fi, Telivision, Washing machine, Bathroom, Kitchen',
      price: 1000,
      image:
        'https://plus.unsplash.com/premium_photo-1670360414903-19e5832f8bc4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      available: true,
      rating: 3.7,
    };

    this.roomList = [...this.roomList, room];
  }
}
