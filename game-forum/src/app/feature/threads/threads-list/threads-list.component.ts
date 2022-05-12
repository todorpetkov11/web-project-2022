import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { IThread } from 'src/app/core/interfaces/thread';
import { ThreadService } from 'src/app/core/services/thread.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-threads-list',
  templateUrl: './threads-list.component.html',
  styleUrls: ['./threads-list.component.css']
})
export class ThreadsListComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer, private threadService: ThreadService, private activatedRoute: ActivatedRoute) { }

  threads: IThread[];


  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(query => {
        if (!query) {
          this.threadService.getAllThreads().subscribe({
            next: (threads) => {
              this.threads = threads
              // this.threads.forEach(thread => {
              //   thread.imagePath = this.sanitizer.bypassSecurityTrustResourceUrl(thread.photoUrl)
              // })
            }
          })
        }
        else {
          let param = Object.entries(query).flat()
          this.threadService.getThreadsWithParams(param[0], param[1]).subscribe({
            next: (threads) => {
              this.threads = threads
              // this.threads.forEach(thread => {
              //   thread.imagePath = this.sanitizer.bypassSecurityTrustResourceUrl(thread.photoUrl)
              // })
            }
          })
        }
      }
      );
  }
};
