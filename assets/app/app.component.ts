import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import { HeaderComponent } from './header.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.template.html',
  directives: [ROUTER_DIRECTIVES, HeaderComponent]
})
export class AppComponent {
}
