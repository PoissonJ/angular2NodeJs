import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";

import { Message } from './message';
import { MessageService } from './message.service';

@Component({
  moduleId: module.id,
  selector: 'my-message-input',
  templateUrl: 'messageInput.html'
})
export class MessageInputComponent {

  model = new Message("");

  // Get instance of mesage service
  constructor(private _messageService: MessageService) { }
  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  active: boolean = true;

  onSubmit(model: Message) {
    const message: Message = new Message(model.content, null, 'Dummy');
    this._messageService.addMessage(message)
      .subscribe( // Check for returned data
        data => console.log(data.json()),
        error => console.log(error.json())
      );

    this.model.content="";
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
