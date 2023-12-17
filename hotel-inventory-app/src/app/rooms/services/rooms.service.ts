import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { Room } from '../rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: Room[] = [];
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private httpClient: HttpClient,
  ) {
    console.log(this.config.apiEndpoint);
    console.log('Rooms service initialised...');
  }

  getRooms() {
    return this.httpClient.get<Room[]>(
      'https://tender-cloak-toad.cyclic.app/api/rooms',
    );
  }

  addRoom(room: Room) {
    return this.httpClient.post<Room[]>(
      'https://tender-cloak-toad.cyclic.app/api/rooms',
      room,
    );
  }

  editRoom(room: Room) {
    return this.httpClient.put<Room[]>(
      `https://tender-cloak-toad.cyclic.app/api/rooms/${room.roomNumber}`,
      room,
    );
  }

  delete(id: string) {
    return this.httpClient.delete<Room[]>(
      `https://tender-cloak-toad.cyclic.app/api/rooms/${id}`,
    );
  }
}
