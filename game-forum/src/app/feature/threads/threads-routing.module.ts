import { RouterModule, Routes } from '@angular/router';
import { MyThreadsComponent } from './my-threads/my-threads.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { ThreadDetailsComponent } from './thread-details/thread-details.component';


const routes: Routes = [
    {
        path: 'thread',
        component: ThreadDetailsComponent,
        data: { animation: 'threadDetailsPage' }
    },

    {
        path: 'create-thread',
        component: NewThreadComponent,
        data: { animation: 'createThreadPage' }
    },

    {
        path: 'my-threads',
        component: MyThreadsComponent,
        data: { animation: 'myThreadsPage' }
    },

];

export const ThreadsRoutingModule = RouterModule.forChild(routes);