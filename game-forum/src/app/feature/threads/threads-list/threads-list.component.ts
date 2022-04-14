import { Component, OnInit } from '@angular/core';
import { IThread } from 'src/app/core/interfaces/thread';
import { ThreadService } from 'src/app/core/services/thread.service';

@Component({
  selector: 'app-threads-list',
  templateUrl: './threads-list.component.html',
  styleUrls: ['./threads-list.component.css']
})
export class ThreadsListComponent implements OnInit {

  constructor(private threadService: ThreadService) { }

  threads: IThread[];

  ngOnInit(): void {

    this.threadService.getAllThreads().subscribe({
      next: (threads) => {
        this.threads = threads
        console.log(threads)
      }
    })
  }

}
