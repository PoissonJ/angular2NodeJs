import { MessagesComponent } from './messages/messages.component';
import { authRoutes} from './auth/auth.routes';
import { AuthenticationComponent } from './auth/authentication.component';

export const MessageAppRoutes = [
  { path: '', component: MessagesComponent },
  //TODO: Create child routes and separate component for "homepage" of auth
  ...authRoutes
]
