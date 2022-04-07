import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreadsListComponent } from './threads-list/threads-list.component';
import { ThreadsListItemComponent } from './threads-list-item/threads-list-item.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ThreadsListComponent,
    ThreadsListItemComponent,
    NewThreadComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ThreadsListComponent
  ]
})
export class ThreadsModule { }
