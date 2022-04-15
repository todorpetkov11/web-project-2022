import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { IThread } from 'src/app/core/interfaces/thread';
import { ThreadService } from 'src/app/core/services/thread.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-threads-list',
  templateUrl: './threads-list.component.html',
  styleUrls: ['./threads-list.component.css']
})
export class ThreadsListComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer, private threadService: ThreadService,) { }

  threads: IThread[];

  ngOnInit(): void {

    this.threadService.getAllThreads().subscribe({
      next: (threads) => {
        this.threads = threads
        this.threads.forEach(thread => {
          thread.imagePath = this.sanitizer.bypassSecurityTrustResourceUrl(thread.photoUrl)
        })
      }
    })
  }

}
