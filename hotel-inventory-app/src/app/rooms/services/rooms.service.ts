import { Inject, Injectable } from '@angular/core';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { Room } from '../rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: Room[] = [
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
  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log(this.config.apiEndpoint);
    console.log('Rooms service initialised...');
  }

  getRooms() {
    return this.roomList;
  }
}
