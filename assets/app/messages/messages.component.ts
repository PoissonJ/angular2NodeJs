import {Component} from "@angular/core";
import { MessageListComponent } from './message-list.component';
import { MessageInputComponent } from './message-input.component';

@Component({
  moduleId: module.id,
  selector: 'my-messages',
  templateUrl: 'messages.html',
  directives: [MessageListComponent, MessageInputComponent]
})
export class MessagesComponent {

}
