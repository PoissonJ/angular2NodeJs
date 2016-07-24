import { Component } from '@angular/core';
import { MessageComponent } from './messages/message.component';
import { Message } from './messages/message';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.template.html',
  directives: [MessageComponent]
})
export class AppComponent {
  message: Message = new Message('A new message', null, 'Jonathan');
}
