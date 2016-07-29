import {Component, OnInit} from "@angular/core";
import {REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'my-signin',
  templateUrl: 'signin.html',
  directives: [REACTIVE_FORM_DIRECTIVES] // required for model driven forms
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  onSubmit() {
    console.log(this.myForm.value);
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
