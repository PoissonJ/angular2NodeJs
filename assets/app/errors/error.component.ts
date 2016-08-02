import { Component, OnInit } from "@angular/core";

import { Error } from "./error";
import { ErrorService } from "./error.service";

@Component({
  selector: 'my-error',
  moduleId: module.id, // necessary when using tsconfig "commonjs" for file path resolution
  templateUrl: './error.html',
  styles: [`
    .backdrop {
        background-color: rgba(0,0,0,0.6);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
    }
  `],
  providers: [ErrorService]
})
export class ErrorComponent implements OnInit {
  errorDisplay = 'none';
  errorData: Error;

  constructor(private _errorService: ErrorService) {}

  onErrorHandled() {
    this.errorDisplay = 'none';
  }

  ngOnInit() {
    this._errorService.errorOccurred.subscribe(
      errorData => {
        this.errorData = errorData;
        this.errorDisplay = 'block';
      }
    )
  }
}
