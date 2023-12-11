import {
  Component,
  DoCheck,
  OnInit,
  SkipSelf,
  ViewEncapsulation,
} from '@angular/core';
import { Room, Rooms } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
  // encapsulation: ViewEncapsulation.None,
})
export class RoomsComponent implements OnInit, DoCheck {
  numberOfRooms = 10;
  hideRoomsInfo = false;
  selectedRoom!: Room;
  title = 'Room List';

  rooms: Rooms = {
    available: 10,
    booked: 5,
    total: 20,
  };

  roomList: Room[] = [];

  // Tells Angular to skip this component for dependency resolution
  constructor(@SkipSelf() private roomsService: RoomsService) {}

  toggle() {
    this.hideRoomsInfo = !this.hideRoomsInfo;
    // this.title = 'Rooms List';
  }

  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();
  }

  ngDoCheck(): void {
    console.log('on changes is called');
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
