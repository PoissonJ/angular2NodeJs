import { EventEmitter } from "@angular/core";
import { Error } from "./error";

export class ErrorService {
  errorOccurred = new EventEmitter<Error>();

  handleError(error: any) { // many different types but all have title and mesage
    const errorData = new Error(error.title, error.error.message);
    this.errorOccurred.emit(errorData);
  }
}
