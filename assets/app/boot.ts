///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from "@angular/core"
import { ROUTER_PROVIDERS} from "@angular/router";
import { LocationStrategy, HashLocationStrategy} from "@angular/common"

import { AppComponent } from "./app.component";
import { MessageService } from "./messages/message.service";

// Added message service so each component shares a single instance
// of the service
bootstrap(AppComponent, [
  MessageService,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
