import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  // template: '<h1>This is an inline template',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // styles: ['h1 { color: blueviolet; font-family: sans-serif }'],
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {
  hotelName = 'Park Avenue';
  role = 'Users';

  constructor() {}

  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  @ViewChild('user', { read: ViewContainerRef })
  vcr!: ViewContainerRef;
  @ViewChild('name', { static: true })
  elementRef!: ElementRef;

  ngOnInit(): void {
    this.elementRef.nativeElement.innerText = 'This is a test!';
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms View';
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.numberOfRooms = 100;

    this.headerChildrenComponent.forEach((child, index) => {
      child.title = `${index}`;
    });
  }

  ngAfterViewChecked(): void {}
}

// Structural Directives: change behavior of DOM: remove, add elements - more costly E.g. *ngIf, *ngFor, *ngSwitch
