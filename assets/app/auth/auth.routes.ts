import {RouterConfig} from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';
import { LogoutComponent } from './logout.component';

export const authRoutes: RouterConfig = [
  {
    path: 'auth',
    redirectTo: 'auth/signup',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthenticationComponent,
    children: [
      {path: 'signup', component: SignupComponent },
      {path: 'signin', component: SigninComponent },
      {path: 'logout', component: LogoutComponent }
    ]
  },
]
