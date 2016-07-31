import {Injectable, EventEmitter} from "@angular/core";
import {Http, Headers} from "@angular/http";
import 'rxjs/Rx'; // .map()
import {Observable} from "rxjs/Observable";
import {Message} from "./message";

@Injectable() // Does nothing except allow us to inject the HTTP service
export class MessageService {
  public messages: Message[] = [];
  public messageIsEdit = new EventEmitter<Message>();

  constructor(private _http: Http) {}

  addMessage(message: Message) {
    const body = JSON.stringify(message);
    const headers = new Headers({'Content-Type': 'application/json'});

    return this._http.post('http://localhost:3000/message', body, {headers: headers})
      .map(response => {
        // transform into a message of our custom message component
        const data = response.json().obj;
        let message = new Message(data.content, data._id, 'Dummy', null);
        return message;
      })
      .catch(error => Observable.throw(error.json()));
  }

  getMessages() {
    return this._http.get('http://localhost:3000/message')
      .map(response => {
        // transform into an array of our custom message component
        const data = response.json().obj;
        let objs: any[] = [];
        for (let i = 0; i < data.length; i++) {
          let message = new Message(data[i].content, data[i]._id, 'Dummy', null);
          objs.push(message);
        };
        return objs;
      })
      .catch(error => Observable.throw(error));
  }

  updateMessage(message: Message) {
    const body = JSON.stringify(message);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.patch('http://localhost:3000/message/' + message.messageId, body, {headers: headers})
      .map(response => response.json())
      .catch(error => Observable.throw(error));
  }

  editMessage(message: Message) {
    this.messageIsEdit.emit(message);
  }

  deleteMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
    return this._http.delete('http://localhost:3000/message/' + message.messageId)
      .map(response => response.json())
      .catch(error => Observable.throw(error));
  }
}
