///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from "./app.component";
import { MessageService } from "./messages/message.service";
import { ROUTER_PROVIDERS } from "@angular/router";

// Added message service so each component shares a single instance
// of the service
bootstrap(AppComponent, [MessageService, ROUTER_PROVIDERS]);
