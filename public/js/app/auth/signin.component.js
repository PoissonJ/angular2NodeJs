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
var SigninComponent = (function () {
    function SigninComponent(_fb) {
        this._fb = _fb;
    }
    SigninComponent.prototype.onSubmit = function () {
        console.log(this.myForm.value);
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
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHNCQUF3RixnQkFBZ0IsQ0FBQyxDQUFBO0FBUXpHO0lBR0UseUJBQW9CLEdBQWdCO1FBQWhCLFFBQUcsR0FBSCxHQUFHLENBQWE7SUFBSSxDQUFDO0lBRXpDLGtDQUFRLEdBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQzNCLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoRCxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FDcEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDhDQUE4QztJQUN0QyxpQ0FBTyxHQUFmLFVBQWdCLE9BQW9CO1FBQ2xDLElBQUksRUFBRSxHQUFHLHdKQUF3SixDQUFDO1FBRWxLLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQTdCSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLGFBQWE7WUFDMUIsVUFBVSxFQUFFLENBQUMsZ0NBQXdCLENBQUMsQ0FBQyxrQ0FBa0M7U0FDMUUsQ0FBQzs7dUJBQUE7SUEwQkYsc0JBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBekJZLHVCQUFlLGtCQXlCM0IsQ0FBQSIsImZpbGUiOiJhdXRoL3NpZ25pbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbXktc2lnbmluJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWduaW4uaHRtbCcsXG4gIGRpcmVjdGl2ZXM6IFtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVNdIC8vIHJlcXVpcmVkIGZvciBtb2RlbCBkcml2ZW4gZm9ybXNcbn0pXG5leHBvcnQgY2xhc3MgU2lnbmluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbXlGb3JtOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyKSB7IH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm15Rm9ybS52YWx1ZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgIGVtYWlsOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCB0aGlzLmlzRW1haWxdXSxcbiAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gIH1cblxuICAvLyBPbmx5IHJldHVucyBhIHZhbHVlIGlmIHRoZSB2YWxpZGF0aW9uIGZhaWxzXG4gIHByaXZhdGUgaXNFbWFpbChjb250cm9sOiBGb3JtQ29udHJvbCk6IHsgW3M6IHN0cmluZ106IGJvb2xlYW4gfSB7XG4gICAgdmFyIHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG5cbiAgICBpZiAoIWNvbnRyb2wudmFsdWUubWF0Y2gocmUpKSB7XG4gICAgICByZXR1cm4geyBpbnZhbGlkTWFpbDogdHJ1ZSB9O1xuICAgIH1cbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
