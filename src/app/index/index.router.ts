import { Route } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { IndexComponent } from './index.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


export const IndexRoutes: Route[] = [
    {
        path: '',
        component: IndexComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent },
            { path: 'forgot', component: ForgotComponent }
        ]
    }
];