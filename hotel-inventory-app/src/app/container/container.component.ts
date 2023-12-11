import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent implements AfterContentInit {
  @ContentChild(EmployeeComponent) employeeContent!: EmployeeComponent;
  ngAfterContentInit(): void {
    console.log(this.employeeContent);
    this.employeeContent.empName = 'Test';
  }
}
