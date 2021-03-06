import {Component, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";

import { Message } from './message';
import { MessageService } from './message.service';
import {ErrorService} from "../errors/error.service";

@Component({
  moduleId: module.id,
  selector: 'my-message-input',
  templateUrl: 'messageInput.html'
})
export class MessageInputComponent implements OnInit {

  model: Message = new Message("");
  originalTextBeforeEdit: string;
  public showCancelButton: boolean = false;
  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  active: boolean = true;

  // Get instance of mesage service
  constructor(private _messageService: MessageService, private _errorService: ErrorService) { }

  onSubmit() {
    if (this.showCancelButton) { // Edit a message
      // Edit
      this._messageService.updateMessage(this.model)
        .subscribe(
          data => console.log(data),
          error => this._errorService.handleError(error)
        );

      this.model = new Message("");
      this._resetForm();
    } else { // New message
      const message: Message = new Message(this.model.content, null, 'Dummy');
      this._messageService.addMessage(message)
        .subscribe( // Check for returned data
          data => {
            this._messageService.messages.push(data); // Update angulars message service to stay in sync
          },
          error => this._errorService.handleError(error)
        );

      this.model = new Message("");
      this._resetForm();
    }
  }

  onCancel() {
    this.model.content = this.originalTextBeforeEdit;
    this.model = new Message("");
    this._resetForm();
  }

  ngOnInit() {
    this._messageService.messageIsEdit.subscribe(
      message => {
        this.model = message;
        this.originalTextBeforeEdit = message.content;
        this.showCancelButton = true;
      }
    );
  }

  private _resetForm() {
    this.showCancelButton = false;
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
