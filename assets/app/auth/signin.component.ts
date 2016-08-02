import {Component, OnInit} from "@angular/core";
import {REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {Router} from "@angular/router";

import { User } from "./user";
import { AuthService } from "./auth.service";
import { ErrorService } from "../errors/error.service";

@Component({
  moduleId: module.id,
  selector: 'my-signin',
  templateUrl: 'signin.html',
  directives: [REACTIVE_FORM_DIRECTIVES] // required for model driven forms
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;

  constructor(private _fb: FormBuilder, private _authService: AuthService,
    private _router: Router, private _errorService: ErrorService) { }

  onSubmit() {
    const user = new User(this.myForm.value.email, this.myForm.value.password);
    this._authService.signin(user)
      .subscribe(
        data => {
          localStorage.setItem('token', data.obj);
          localStorage.setItem('userId', data.userId);
          this._router.navigateByUrl('/');
        },
        error => this._errorService.handleError(error)
      );
  }

  ngOnInit() {
    this.myForm = this._fb.group({
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
