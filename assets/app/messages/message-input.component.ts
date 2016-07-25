import {Component} from "@angular/core";
import { Message } from './message';
import { MessageService } from './message.service';

@Component({
  moduleId: module.id,
  selector: 'my-message-input',
  templateUrl: 'messageInput.html'
})
export class MessageInputComponent {

  // Get instance of mesage service
  constructor(private _messageService: MessageService) { }

  onSubmit(form: any) {
    const message: Message = new Message(form.content, null, 'Dummy');
    this._messageService.addMessage(message);
  }
}
