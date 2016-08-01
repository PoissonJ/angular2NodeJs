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
var router_1 = require("@angular/router");
var user_1 = require("./user");
var auth_service_1 = require("./auth.service");
var SigninComponent = (function () {
    function SigninComponent(_fb, _authService, _router) {
        this._fb = _fb;
        this._authService = _authService;
        this._router = _router;
    }
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new user_1.User(this.myForm.value.email, this.myForm.value.password);
        this._authService.signin(user)
            .subscribe(function (data) {
            localStorage.setItem('token', data.obj);
            localStorage.setItem('userId', data.userId);
            _this._router.navigateByUrl('/');
        }, function (error) { return console.error(error); });
    };
    SigninComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            email: ['', [forms_1.Validators.required, this.isEmail]],
            password: ['', forms_1.Validators.required]
        });
    };
    // Only retuns a value if the validation fails
    SigninComponent.prototype.isEmail = function (control) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!control.value.match(re)) {
            return { invalidMail: true };
        }
    };
    SigninComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-signin',
            templateUrl: 'signin.html',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES] // required for model driven forms
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService, router_1.Router])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHNCQUF3RixnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3pHLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBRXZDLHFCQUFxQixRQUFRLENBQUMsQ0FBQTtBQUM5Qiw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQVE3QztJQUdFLHlCQUFvQixHQUFnQixFQUFVLFlBQXlCLEVBQVUsT0FBZTtRQUE1RSxRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQUksQ0FBQztJQUVyRyxrQ0FBUSxHQUFSO1FBQUEsaUJBV0M7UUFWQyxJQUFNLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQzNCLFNBQVMsQ0FDUixVQUFBLElBQUk7WUFDRixZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQzlCLENBQUM7SUFDTixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDM0IsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hELFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUNwQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsOENBQThDO0lBQ3RDLGlDQUFPLEdBQWYsVUFBZ0IsT0FBb0I7UUFDbEMsSUFBSSxFQUFFLEdBQUcsd0pBQXdKLENBQUM7UUFFbEssRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQy9CLENBQUM7SUFDSCxDQUFDO0lBdENIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsYUFBYTtZQUMxQixVQUFVLEVBQUUsQ0FBQyxnQ0FBd0IsQ0FBQyxDQUFDLGtDQUFrQztTQUMxRSxDQUFDOzt1QkFBQTtJQW1DRixzQkFBQztBQUFELENBbENBLEFBa0NDLElBQUE7QUFsQ1ksdUJBQWUsa0JBa0MzQixDQUFBIiwiZmlsZSI6ImF1dGgvc2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXJcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4vYXV0aC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ215LXNpZ25pbicsXG4gIHRlbXBsYXRlVXJsOiAnc2lnbmluLmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTXSAvLyByZXF1aXJlZCBmb3IgbW9kZWwgZHJpdmVuIGZvcm1zXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG15Rm9ybTogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKHRoaXMubXlGb3JtLnZhbHVlLmVtYWlsLCB0aGlzLm15Rm9ybS52YWx1ZS5wYXNzd29yZCk7XG4gICAgdGhpcy5fYXV0aFNlcnZpY2Uuc2lnbmluKHVzZXIpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLm9iaik7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsIGRhdGEudXNlcklkKTtcbiAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIHRoaXMuaXNFbWFpbF1dLFxuICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIE9ubHkgcmV0dW5zIGEgdmFsdWUgaWYgdGhlIHZhbGlkYXRpb24gZmFpbHNcbiAgcHJpdmF0ZSBpc0VtYWlsKGNvbnRyb2w6IEZvcm1Db250cm9sKTogeyBbczogc3RyaW5nXTogYm9vbGVhbiB9IHtcbiAgICB2YXIgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcblxuICAgIGlmICghY29udHJvbC52YWx1ZS5tYXRjaChyZSkpIHtcbiAgICAgIHJldHVybiB7IGludmFsaWRNYWlsOiB0cnVlIH07XG4gICAgfVxuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
