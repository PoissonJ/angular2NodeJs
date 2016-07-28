import { MessagesComponent } from './messages/messages.component';
import { authRoutes} from './auth/auth.routes';

export const MessageAppRoutes = [
  { path: '', component: MessagesComponent },
  ...authRoutes
]
