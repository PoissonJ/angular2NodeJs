///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from "@angular/core"
import { provideRouter} from "@angular/router";
import { LocationStrategy, HashLocationStrategy} from "@angular/common"
import { disableDeprecatedForms, provideForms} from "@angular/forms"
import { HTTP_PROVIDERS} from "@angular/http"

import { AppComponent } from "./app.component";
import { MessageAppRoutes } from "./app.routes";
import { MessageService } from "./messages/message.service";
import { AuthService } from "./auth/auth.service";

// Added message service so each component shares a single instance
// of the service
bootstrap(AppComponent, [
  MessageService,
  AuthService,
  provideRouter(MessageAppRoutes),
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS
]);
