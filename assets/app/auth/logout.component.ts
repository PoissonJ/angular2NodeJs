import {Component} from "@angular/core";
import {Router} from "@angular/router";

import {AuthService} from "./auth.service"
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

  constructor(private _authService: AuthService, private _router: Router){}

  onLogout() {
    this._authService.logout();
    this._router.navigate(['/auth/signin']);
  }
}
