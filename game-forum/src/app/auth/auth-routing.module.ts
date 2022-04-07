import { RouterModule, Routes } from '@angular/router';
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
        path: 'profile',
        component: ProfileComponent,
        data: { animation: 'profilePage' }
    },

    {
        path: 'edit-profile',
        component: EditProfileComponent,
        data: { animation: 'editProfile'}
    }

];

export const AuthRoutingModule = RouterModule.forChild(routes);