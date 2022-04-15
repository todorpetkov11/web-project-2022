import { Component, Input, OnInit } from '@angular/core';
import { IThread } from 'src/app/core/interfaces/thread';

@Component({
  selector: 'app-my-threads-item',
  templateUrl: './my-threads-item.component.html',
  styleUrls: ['./my-threads-item.component.css']
})
export class MyThreadsItemComponent implements OnInit {

  constructor() { }

  @Input() thread: IThread

  
  ngOnInit(): void {
  }

}
