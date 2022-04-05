import { RouterModule, Routes } from '@angular/router';
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
        component: ProfileComponent
    },

];

export const AuthRoutingModule = RouterModule.forChild(routes);