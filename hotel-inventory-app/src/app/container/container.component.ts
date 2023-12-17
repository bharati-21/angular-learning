import { AfterContentInit, Component, ContentChild, Host } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
  // providers: [RoomsService],
})
export class ContainerComponent implements AfterContentInit {
  @ContentChild(EmployeeComponent) employeeContent!: EmployeeComponent;
  ngAfterContentInit(): void {
    console.log(this.employeeContent);
    this.employeeContent.empName = 'Test';
  }

  // constructor(@Host() private roomsService: RoomsService) {}
  constructor(private roomsService: RoomsService) {}
}
