import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { User } from "./user"
import 'rxjs/Rx'; // .map()
import { Observable } from "rxjs/Observable"

@Injectable()
export class AuthService {
  constructor (private _http: Http){}

  signup(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post('http://localhost:3000/user', body, {headers: headers})
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()))
  }

  signin(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post('http://localhost:3000/user/signin', body, {headers: headers})
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()))
  }

  // No need to reach out to server because it already gave us the token
  logout() {
    localStorage.clear();
  }
}
