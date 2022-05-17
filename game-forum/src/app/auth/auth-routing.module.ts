import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../core/guards/auth.guard';
import { MyThreadsComponent } from '../feature/threads/my-threads/my-threads.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        data: { animation: 'loginPage' }
    },

    {
        path: 'register',
        component: RegisterComponent,
        data: { animation: 'registerPage' }
    },

    {
        path: 'profile/:username/threads',
        component: MyThreadsComponent,
        data: { animation: 'myThreadsPage' }
    },

    {
        path: 'profile/:username',
        component: ProfileComponent,
        data: { animation: 'profilePage' }
    },

    {
        path: 'edit-profile',
        component: EditProfileComponent,
        data: { animation: 'editProfile' }
    }

];

export const AuthRoutingModule = RouterModule.forChild(routes);