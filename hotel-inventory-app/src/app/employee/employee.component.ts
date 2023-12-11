import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  providers: [RoomsService],
})
export class EmployeeComponent {
  empName: string = '';

  // this service must be available here
  // if not throw NullInjector
  constructor(@Self() private roomsService: RoomsService) {}
}
