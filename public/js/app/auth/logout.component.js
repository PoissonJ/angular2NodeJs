"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("./auth.service");
var LogoutComponent = (function () {
    function LogoutComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    LogoutComponent.prototype.onLogout = function () {
        this._authService.logout();
        this._router.navigate(['/auth/signin']);
    };
    LogoutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-logout',
            template: "\n  <section class=\"col-md-8 col-md-offset-2\">\n    <button class=\"btn btn-danger\" (click)=\"onLogout()\">Log out</button>\n  </section>\n  "
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvbG9nb3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBRXZDLDZCQUEwQixnQkFDMUIsQ0FBQyxDQUR5QztBQVUxQztJQUVFLHlCQUFvQixZQUF5QixFQUFVLE9BQWU7UUFBbEQsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQUUsQ0FBQztJQUV6RSxrQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQWhCSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLGtKQUlUO1NBQ0YsQ0FBQzs7dUJBQUE7SUFTRixzQkFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlksdUJBQWUsa0JBUTNCLENBQUEiLCJmaWxlIjoiYXV0aC9sb2dvdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi9hdXRoLnNlcnZpY2VcIlxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsIC8vIG5lY2Vzc2FyeSB3aGVuIHVzaW5nIHRzY29uZmlnIFwiY29tbW9uanNcIiBmb3IgZmlsZSBwYXRoIHJlc29sdXRpb25cbiAgc2VsZWN0b3I6ICdteS1sb2dvdXQnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIChjbGljayk9XCJvbkxvZ291dCgpXCI+TG9nIG91dDwvYnV0dG9uPlxuICA8L3NlY3Rpb24+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTG9nb3V0Q29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKXt9XG5cbiAgb25Mb2dvdXQoKSB7XG4gICAgdGhpcy5fYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2F1dGgvc2lnbmluJ10pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
