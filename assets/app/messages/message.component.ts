import {Component, Input} from "@angular/core";
import {Message} from "./message";

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
}
