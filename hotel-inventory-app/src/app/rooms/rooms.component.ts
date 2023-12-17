import { HttpEventType } from '@angular/common/http';
import {
  Component,
  DoCheck,
  OnInit,
  SkipSelf,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Room, Rooms } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
  encapsulation: ViewEncapsulation.None,
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

  totalBytes: number = 0;

  stream = new Observable((observer) => {
    observer.next('user1'); // next emits new data
    // subscriber will get the new data
    observer.next('user2');
    observer.next('user3');
    observer.complete();
  });

  // Tells Angular to skip this component for dependency resolution
  // constructor(@SkipSelf() private roomsService: RoomsService) {}
  constructor(private roomsService: RoomsService) {}

  toggle() {
    this.hideRoomsInfo = !this.hideRoomsInfo;
    // this.title = 'Rooms List';
  }

  ngOnInit(): void {
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete...'),
      error: (err) => console.log(err),
    });
    this.stream.subscribe(console.log);
    this.roomsService.getRooms$.subscribe((rooms) => {
      this.roomList = rooms;
    });
    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request sent...');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success...');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
    });
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
      roomNumber: this.roomList.length + 1 + '',
      roomType: 'Deluxe',
      amenities:
        'Air conditioner, Free Wi-Fi, Telivision, Washing machine, Bathroom, Kitchen',
      price: 1000,
      image:
        'https://plus.unsplash.com/premium_photo-1670360414903-19e5832f8bc4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 3.7,
      checkinTime: new Date('17-12-2023'),
      checkoutTime: new Date('20-12-2023'),
    };

    // this.roomList = [...this.roomList, room];
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  editRoom() {
    const room: Room = {
      roomNumber: '2',
      roomType: 'Deluxe',
      amenities:
        'Air conditioner, Free Wi-Fi, Telivision, Washing machine, Bathroom, Kitchen',
      price: 1000,
      image:
        'https://plus.unsplash.com/premium_photo-1670360414903-19e5832f8bc4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 3.7,
      checkinTime: new Date('17-12-2023'),
      checkoutTime: new Date('20-12-2023'),
    };

    this.roomsService.editRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  deleteRoom() {
    this.roomsService.delete('4').subscribe((data) => {
      this.roomList = data;
    });
  }
}
