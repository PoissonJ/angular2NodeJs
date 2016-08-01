import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

import {SignupComponent} from "./signup.component";
import {SigninComponent} from "./signin.component";
import {LogoutComponent} from "./logout.component";
import {AuthService} from "./auth.service";

@Component({
  moduleId: module.id,
  selector: 'my-auth',
  templateUrl: 'authenticationComponent.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [SignupComponent, SigninComponent, LogoutComponent],
  styles: [`
    .active {
      color: #555;
      cursor: default;
      background-color: #fff;
      border: 1px solid #ddd;
      border-bottom-color: transparent;
    }
  `]
})
export class AuthenticationComponent {

  constructor(private _authService: AuthService){}

  isLoggedIn() {
    return this._authService.isLoggedIn();
  }

}
