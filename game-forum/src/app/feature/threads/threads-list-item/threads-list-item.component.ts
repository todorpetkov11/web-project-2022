import { Component, Input, OnInit } from '@angular/core';
import { IThread } from 'src/app/core/interfaces/thread';

@Component({
  selector: 'app-threads-list-item',
  templateUrl: './threads-list-item.component.html',
  styleUrls: ['./threads-list-item.component.css']
})
export class ThreadsListItemComponent implements OnInit {

  constructor() { }

  @Input() thread: IThread;

  ngOnInit(): void {
  }

}
