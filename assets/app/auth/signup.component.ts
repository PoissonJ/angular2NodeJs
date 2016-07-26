import {Component, OnInit} from "@angular/core";
import {FormBuilder, ControlGroup, Validators} from "@angular/common";
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
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
