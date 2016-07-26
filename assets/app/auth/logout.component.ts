import {Component} from "@angular/core";
@Component({
  selector: 'my-logout',
  template: `
  <section class="col-md-8 col-md-offset-2">
    <button class="btn btn-danger" (click)="onLogout()"></button>
  </section>
  `
})
export class LogoutComponent {
  onLogout() {

  }
}
