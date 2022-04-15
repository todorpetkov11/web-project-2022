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
  searchBy: string;
  param: string;

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(params => {
        console.log(params)
        this.searchBy = params['searchBy'];
        this.param = params[this.searchBy]
      }
    );

    if (!this.searchBy) {
      console.log(this.searchBy)
      this.threadService.getAllThreads().subscribe({
        next: (threads) => {
          this.threads = threads
          this.threads.forEach(thread => {
            thread.imagePath = this.sanitizer.bypassSecurityTrustResourceUrl(thread.photoUrl)
          })
        }
      })
    }
    else {
      this.threadService.getThreadsWithParams(this.searchBy, this.param).subscribe({
        next: (threads) => {
          this.threads = threads
        }
      })
    }

  }

}
