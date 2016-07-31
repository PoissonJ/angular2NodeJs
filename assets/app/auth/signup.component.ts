import {Component, OnInit} from "@angular/core";
import {REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";

import { User } from "./user";
import { AuthService } from "./auth.service";
@Component({
  moduleId: module.id, // necessary when using tsconfig "commonjs" for file path resolution
  selector: 'my-signup',
  templateUrl: 'signup.html',
  directives: [REACTIVE_FORM_DIRECTIVES] // required for model driven forms
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;

  constructor(private _fb: FormBuilder, private _authService: AuthService) { }

  onSubmit() {
    console.log(JSON.stringify(this.myForm.value));
    const user = new User(
      this.myForm.value.email,
      this.myForm.value.password,
      this.myForm.value.firstName,
      this.myForm.value.lastName
    );

    this._authService.signup(user)
      .subscribe(
        data => console.log(data), // remove for production
        error => console.error(error)
      )
  }

  ngOnInit() {
    this.myForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, this.isEmail]],
      password: ['', Validators.required]
    });
  }

  // Only retuns a value if the validation fails
  private isEmail(control: FormControl): { [s: string]: boolean } {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!control.value.match(re)) {
      return { invalidMail: true };
    }
  }
}
