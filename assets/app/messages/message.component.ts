import {Component, Input, Output, EventEmitter} from "@angular/core";

import {Message} from "./message";
import {MessageService} from "./message.service";
import {ErrorService} from "../errors/error.service";

@Component({
  selector: 'my-message',
  moduleId: module.id, // necessary when using tsconfig "commonjs" for file path resolution
  templateUrl: './messageTemplate.html',
  styles: [`
    .author {
      display: inline-block;
      font-style: italic;
      font-size: 12px;
      width: 80%;
    }
    .config {
      display: inline-block;
      text-align: right;
      font-size: 12px;
      width: 19%;
    }
  `]
})
export class MessageComponent {
  @Input() message: Message;
  @Output() editClicked = new EventEmitter<string>()

  constructor(private _messageService: MessageService, private _errorService: ErrorService) { }

  onEdit() {
    this._messageService.editMessage(this.message); // Each message has its own component
  }

  onDelete() {
    this._messageService.deleteMessage(this.message) // Each message has its own component
      .subscribe(
        data => console.log(data),
        error => this._errorService.handleError(error)
      );
  }

  belongsToUser() {
    return localStorage.getItem('userId') == this.message.userId;
  }

}
