import {Component} from "@angular/core";
import { Message } from './message';

@Component({
  moduleId: module.id,
  selector: 'my-message-input',
  templateUrl: 'messageInput.html'
})
export class MessageInputComponent {
  onCreate(content: string) {
    const message: Message = new Message(content, null, 'Dummy');
    console.log(message);
  }
}
