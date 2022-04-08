import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreadsListComponent } from './threads-list/threads-list.component';
import { ThreadsListItemComponent } from './threads-list-item/threads-list-item.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThreadDetailsComponent } from './thread-details/thread-details.component';
import { Router } from '@angular/router';
import { ThreadsRoutingModule } from './threads-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyThreadsComponent } from './my-threads/my-threads.component';



@NgModule({
  declarations: [
    ThreadsListComponent,
    ThreadsListItemComponent,
    NewThreadComponent,
    ThreadDetailsComponent,
    MyThreadsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    ThreadsRoutingModule
  ],
  exports: [
    ThreadsListComponent
  ]
})
export class ThreadsModule { }
