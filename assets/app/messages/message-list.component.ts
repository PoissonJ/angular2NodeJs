import {Component} from "@angular/core";
import { MessageComponent } from './message.component';
import { Message } from './message';

@Component({
  moduleId: module.id,
  selector: 'my-message-list',
  templateUrl: 'messageList.html',
  directives: [MessageComponent]
})
export class MessageListComponent {
  messages: Message[] = [
    new Message('A new message', null, 'Jonathan'),
    new Message('Another message', null, 'Justin')
  ];
}
