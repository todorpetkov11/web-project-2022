import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'src/app/core/guards/auth.guard';
import { MyThreadsComponent } from './my-threads/my-threads.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { ThreadDetailsComponent } from './thread-details/thread-details.component';


const routes: Routes = [
    {
        path: 'thread/:threadId',
        component: ThreadDetailsComponent,
        data: { animation: 'threadDetailsPage' }
    },

    {
        path: 'create-thread',
        component: NewThreadComponent,
        canActivate: [AuthenticationGuard],
        data: { animation: 'createThreadPage' }
    },

    
];

export const ThreadsRoutingModule = RouterModule.forChild(routes);