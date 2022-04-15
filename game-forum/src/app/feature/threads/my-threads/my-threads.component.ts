import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IThread } from 'src/app/core/interfaces/thread';
import { ThreadService } from 'src/app/core/services/thread.service';

@Component({
  selector: 'app-my-threads',
  templateUrl: './my-threads.component.html',
  styleUrls: ['./my-threads.component.css']
})
export class MyThreadsComponent implements OnInit {

  constructor(private threadService: ThreadService, private activatedRoute: ActivatedRoute, router: Router) { }

  threads: IThread[];

  ngOnInit(): void {
    const profileId = this.activatedRoute.snapshot.paramMap.get('profileId')
    this.threadService.getThreadsByProfileId(profileId!).subscribe({
      next: (threads) => {
        this.threads = threads
      }
    })
  }

}
