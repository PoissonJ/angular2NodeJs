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
  // TODO: Workaround until NgForm has a reset method (#6822)
  active: boolean = true;

  onSubmit(model: Message) {
    this._messageService.addMessage(model);
    this.model.content="";
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
