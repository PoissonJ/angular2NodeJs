import {Component, OnInit} from "@angular/core";

import { MessageComponent } from './message.component';
import { Message } from './message';
import { MessageService } from './message.service';
import {ErrorService} from "../errors/error.service";

@Component({
  moduleId: module.id,
  selector: 'my-message-list',
  templateUrl: 'messageList.html',
  directives: [MessageComponent]
})
export class MessageListComponent implements OnInit {

  constructor(private _messageService: MessageService, private _errorService: ErrorService) { }

  messages: Message[];

  ngOnInit() { // better for heavy tasks that in the constructor
    this._messageService.getMessages()
      .subscribe(
        messages => {
          this.messages = messages; // Local message array
          this._messageService.messages = messages; // Application message array
        },
        error => this._errorService.handleError(error)
      )
  }
}
