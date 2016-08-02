import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import { HeaderComponent } from './header.component';
import { ErrorComponent } from './errors/error.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.template.html',
  directives: [ROUTER_DIRECTIVES, HeaderComponent, ErrorComponent]
})
export class AppComponent {
}
