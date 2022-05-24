import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreadsListComponent } from './threads-list/threads-list.component';
import { ThreadsListItemComponent } from './threads-list-item/threads-list-item.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThreadDetailsComponent } from './thread-details/thread-details.component';
import { ThreadsRoutingModule } from './threads-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyThreadsComponent } from './my-threads/my-threads.component';
import { MyThreadsItemComponent } from './my-threads-item/my-threads-item.component';
import { ThreadCommentsComponent } from './thread-comments/thread-comments.component';
import { ThreadCommentsItemComponent } from './thread-comments-item/thread-comments-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutofocusDirective } from './directives/autofocus.directive';




@NgModule({
  declarations: [
    ThreadsListComponent,
    ThreadsListItemComponent,
    AutofocusDirective,
    NewThreadComponent,
    ThreadDetailsComponent,
    MyThreadsComponent,
    MyThreadsItemComponent,
    ThreadCommentsComponent,
    ThreadCommentsItemComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    ThreadsRoutingModule
  ],
  exports: [
    ThreadsListComponent
  ]
})
export class ThreadsModule { }
