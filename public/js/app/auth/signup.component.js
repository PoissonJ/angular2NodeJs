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
var forms_1 = require("@angular/forms");
var user_1 = require("./user");
var auth_service_1 = require("./auth.service");
var SignupComponent = (function () {
    function SignupComponent(_fb, _authService) {
        this._fb = _fb;
        this._authService = _authService;
    }
    SignupComponent.prototype.onSubmit = function () {
        console.log(JSON.stringify(this.myForm.value));
        var user = new user_1.User(this.myForm.value.email, this.myForm.value.password, this.myForm.value.firstName, this.myForm.value.lastName);
        this._authService.signup(user)
            .subscribe(function (data) { return console.log(data); }, // remove for production
        function (// remove for production
            error) { return console.error(error); });
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            email: ['', [forms_1.Validators.required, this.isEmail]],
            password: ['', forms_1.Validators.required]
        });
    };
    // Only retuns a value if the validation fails
    SignupComponent.prototype.isEmail = function (control) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!control.value.match(re)) {
            return { invalidMail: true };
        }
    };
    SignupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-signup',
            templateUrl: 'signup.html',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES] // required for model driven forms
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHNCQUF3RixnQkFBZ0IsQ0FBQyxDQUFBO0FBRXpHLHFCQUFxQixRQUFRLENBQUMsQ0FBQTtBQUM5Qiw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQU83QztJQUdFLHlCQUFvQixHQUFnQixFQUFVLFlBQXlCO1FBQW5ELFFBQUcsR0FBSCxHQUFHLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUFJLENBQUM7SUFFNUUsa0NBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDM0IsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzthQUMzQixTQUFTLENBQ1IsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixFQUFFLHdCQUF3QjtRQUNuRCxVQUQyQix3QkFBd0I7WUFDbkQsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FDOUIsQ0FBQTtJQUNMLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUMzQixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDcEMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoRCxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FDcEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDhDQUE4QztJQUN0QyxpQ0FBTyxHQUFmLFVBQWdCLE9BQW9CO1FBQ2xDLElBQUksRUFBRSxHQUFHLHdKQUF3SixDQUFDO1FBRWxLLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQTNDSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLGFBQWE7WUFDMUIsVUFBVSxFQUFFLENBQUMsZ0NBQXdCLENBQUMsQ0FBQyxrQ0FBa0M7U0FDMUUsQ0FBQzs7dUJBQUE7SUF1Q0Ysc0JBQUM7QUFBRCxDQXRDQSxBQXNDQyxJQUFBO0FBdENZLHVCQUFlLGtCQXNDM0IsQ0FBQSIsImZpbGUiOiJhdXRoL3NpZ251cC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXJcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4vYXV0aC5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCwgLy8gbmVjZXNzYXJ5IHdoZW4gdXNpbmcgdHNjb25maWcgXCJjb21tb25qc1wiIGZvciBmaWxlIHBhdGggcmVzb2x1dGlvblxuICBzZWxlY3RvcjogJ215LXNpZ251cCcsXG4gIHRlbXBsYXRlVXJsOiAnc2lnbnVwLmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTXSAvLyByZXF1aXJlZCBmb3IgbW9kZWwgZHJpdmVuIGZvcm1zXG59KVxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG15Rm9ybTogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7IH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLm15Rm9ybS52YWx1ZSkpO1xuICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihcbiAgICAgIHRoaXMubXlGb3JtLnZhbHVlLmVtYWlsLFxuICAgICAgdGhpcy5teUZvcm0udmFsdWUucGFzc3dvcmQsXG4gICAgICB0aGlzLm15Rm9ybS52YWx1ZS5maXJzdE5hbWUsXG4gICAgICB0aGlzLm15Rm9ybS52YWx1ZS5sYXN0TmFtZVxuICAgICk7XG5cbiAgICB0aGlzLl9hdXRoU2VydmljZS5zaWdudXAodXNlcilcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksIC8vIHJlbW92ZSBmb3IgcHJvZHVjdGlvblxuICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgKVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICBmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBsYXN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCB0aGlzLmlzRW1haWxdXSxcbiAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gIH1cblxuICAvLyBPbmx5IHJldHVucyBhIHZhbHVlIGlmIHRoZSB2YWxpZGF0aW9uIGZhaWxzXG4gIHByaXZhdGUgaXNFbWFpbChjb250cm9sOiBGb3JtQ29udHJvbCk6IHsgW3M6IHN0cmluZ106IGJvb2xlYW4gfSB7XG4gICAgdmFyIHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG5cbiAgICBpZiAoIWNvbnRyb2wudmFsdWUubWF0Y2gocmUpKSB7XG4gICAgICByZXR1cm4geyBpbnZhbGlkTWFpbDogdHJ1ZSB9O1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
