import {Component, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";

import { Message } from './message';
import { MessageService } from './message.service';

@Component({
  moduleId: module.id,
  selector: 'my-message-input',
  templateUrl: 'messageInput.html'
})
export class MessageInputComponent implements OnInit {

  model: Message = new Message("");
  public showCancelButton: boolean = false;
  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  active: boolean = true;

  // Get instance of mesage service
  constructor(private _messageService: MessageService) { }

  onSubmit(model: Message) {
    if (this.showCancelButton) { // Edit a message
      // Edit
      // this.model.content = model.content; // Update front end for better experience
      this.model = new Message("");
      this.showCancelButton = false;
      this._resetForm();
    } else { // New message
      const message: Message = new Message(model.content, null, 'Dummy');
      this._messageService.addMessage(message)
        .subscribe( // Check for returned data
          data => {
            this._messageService.messages.push(data); // Update angulars message service to stay in sync
          },
          error => console.log(JSON.stringify(error))
        );

      this.model = new Message("");
      this._resetForm();
    }
  }

  onCancel() {
    this.model = new Message("");
  }

  ngOnInit() {
    this._messageService.messageIsEdit.subscribe(
      message => {
        this.model = message;
        this.showCancelButton = true;
      }
    );
  }

  private _resetForm() {
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
