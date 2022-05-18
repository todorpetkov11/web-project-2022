import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'src/app/core/guards/auth.guard';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { ThreadDetailsComponent } from './thread-details/thread-details.component';


const routes: Routes = [
    {
        path: 'thread',
        component: ThreadDetailsComponent,
        data: { animation: 'threadDetailsPage' },
        children: [
            {path: '', redirectTo: '0', pathMatch: 'full',},
            {path: ':threadId', component: ThreadDetailsComponent}
        ]
    },

    {
        path: 'create-thread',
        component: NewThreadComponent,
        // canActivate: [AuthenticationGuard],
        data: { animation: 'createThreadPage' }
    },

    
];

export const ThreadsRoutingModule = RouterModule.forChild(routes);