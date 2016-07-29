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
var signup_component_1 = require('./signup.component');
var signin_component_1 = require('./signin.component');
var logout_component_1 = require('./logout.component');
var AuthenticationComponent = (function () {
    function AuthenticationComponent() {
    }
    AuthenticationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-auth',
            templateUrl: 'authenticationComponent.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [signup_component_1.SignupComponent, signin_component_1.SigninComponent, logout_component_1.LogoutComponent],
            styles: ["\n    li {\n      display: none !important;\n    }\n    a.active {\n      color: #555;\n      cursor: default;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-bottom-color: transparent;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());
exports.AuthenticationComponent = AuthenticationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aGVudGljYXRpb25Ib21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2xELGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3JELGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3JELGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBcUJyRDtJQUFBO0lBRUEsQ0FBQztJQXJCRDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztZQUMvQixTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLGtDQUFlLEVBQUUsa0NBQWUsQ0FBQztZQUM5RCxNQUFNLEVBQUUsQ0FBQyxrT0FXUixDQUFDO1NBQ0gsQ0FBQzs7K0JBQUE7SUFHRiw4QkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksK0JBQXVCLDBCQUVuQyxDQUFBIiwiZmlsZSI6ImF1dGgvYXV0aGVudGljYXRpb25Ib21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9zaWdudXAuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gJy4vc2lnbmluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dvdXRDb21wb25lbnQgfSBmcm9tICcuL2xvZ291dC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdteS1hdXRoJyxcbiAgdGVtcGxhdGVVcmw6ICdhdXRoZW50aWNhdGlvbkNvbXBvbmVudC5odG1sJyxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgcHJvdmlkZXJzOiBbU2lnbnVwQ29tcG9uZW50LCBTaWduaW5Db21wb25lbnQsIExvZ291dENvbXBvbmVudF0sXG4gIHN0eWxlczogW2BcbiAgICBsaSB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGEuYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
