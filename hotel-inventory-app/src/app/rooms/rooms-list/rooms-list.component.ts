import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
import { Room } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() rooms: Room[] = [];
  @Input() title: string = 'black';
  @Output() selectedRoom = new EventEmitter<Room>();

  constructor() {}

  selectRoom(room: Room) {
    this.selectedRoom.emit(room);
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges', changes);
    // if (changes['title']) {
    //   this.title = changes['title'].currentValue.toUpperCase();
    // }
  }

  ngOnDestroy(): void {
    // Whenever component gets destroyed
    // Usually used to unsubscribe to events
    console.log('ngOnDestroy');
  }
}
