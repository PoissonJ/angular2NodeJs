import { Component } from '@angular/core';
import { MessageComponent } from './messages/message.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.template.html',
  directives: [MessageComponent]
})
export class AppComponent {
}
