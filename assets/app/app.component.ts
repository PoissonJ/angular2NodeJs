import { Component } from '@angular/core';
import { MessageListComponent } from './messages/message-list.component';
import { MessageInputComponent } from './messages/message-input.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.template.html',
  directives: [MessageListComponent, MessageInputComponent]
})
export class AppComponent {
}
