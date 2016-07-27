import {Component} from "@angular/core";
@Component({
  moduleId: module.id, // necessary when using tsconfig "commonjs" for file path resolution
  selector: 'my-logout',
  template: `
  <section class="col-md-8 col-md-offset-2">
    <button class="btn btn-danger" (click)="onLogout()">Log out</button>
  </section>
  `
})
export class LogoutComponent {
  onLogout() {

  }
}
