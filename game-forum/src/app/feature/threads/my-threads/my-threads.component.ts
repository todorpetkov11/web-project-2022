import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IThread } from 'src/app/core/interfaces/thread';
import { IUser } from 'src/app/core/interfaces/user';
import { ThreadService } from 'src/app/core/services/thread.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-my-threads',
  templateUrl: './my-threads.component.html',
  styleUrls: ['./my-threads.component.css']
})
export class MyThreadsComponent implements OnInit {

  constructor(private threadService: ThreadService, private activatedRoute: ActivatedRoute, router: Router, private userService: UserService) { }

  threads: IThread[];
  user: IUser;

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.threadService.getThreadsByProfileId(id!).subscribe({
      next: (threads) => {
        console.log(threads)
        this.threads = threads
      }
    })
  }

}
