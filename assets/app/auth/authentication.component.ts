import {Component} from "@angular/core";
import {SignupComponent} from "./signup.component";

@Component({
  moduleId: module.id,
  selector: 'my-auth',
  templateUrl: 'authenticationComponent.html',
  directives: [SignupComponent]
})
export class AuthenticationComponent {

}
