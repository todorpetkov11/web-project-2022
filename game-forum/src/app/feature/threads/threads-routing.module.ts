import { RouterModule, Routes } from '@angular/router';
import { ThreadDetailsComponent } from './thread-details/thread-details.component';


const routes: Routes = [
    {
        path: 'thread',
        component: ThreadDetailsComponent,
        data: { animation: 'threadDetails' }
    },

];

export const ThreadsRoutingModule = RouterModule.forChild(routes);