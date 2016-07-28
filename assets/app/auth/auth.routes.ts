import {RouterConfig} from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';
import { LogoutComponent } from './logout.component';

export const authRoutes: RouterConfig = [
  {
    path: 'auth',
    component: AuthenticationComponent,
  }
]
