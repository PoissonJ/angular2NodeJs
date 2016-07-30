import { MessagesComponent } from './messages/messages.component';
import { authRoutes} from './auth/auth.routes';
import { AuthenticationComponent } from './auth/authentication.component';

export const MessageAppRoutes = [
  { path: '', component: MessagesComponent },
  ...authRoutes
]
