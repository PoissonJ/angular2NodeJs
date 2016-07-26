import {Component, OnInit} from "@angular/core";
import {FormBuilder, ControlGroup, Validators, Control} from "@angular/common";
@Component({
  moduleId: module.id, // necessary when using tsconfig "commonjs" for file path resolution
  selector: 'my-signup',
  templateUrl: 'signup.html'
})
export class SignupComponent implements OnInit {
  myForm: ControlGroup;

  constructor(private _fb: FormBuilder) { }

  onSubmit() {
    console.log(this.myForm.value);
  }

  ngOnInit() {
    this.myForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, this.isEmail])],
      password: ['', Validators.required]
    });
  }

  // Only retuns a value if the validation fails
  private isEmail(control: Control): { [s: string]: boolean } {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!control.value.match(re)) {
      return { invalidMail: true };
    }
  }
}
