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
var SignupComponent = (function () {
    function SignupComponent(_fb) {
        this._fb = _fb;
    }
    SignupComponent.prototype.onSubmit = function () {
        console.log(this.myForm.value);
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
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHNCQUF3RixnQkFBZ0IsQ0FBQyxDQUFBO0FBT3pHO0lBR0UseUJBQW9CLEdBQWdCO1FBQWhCLFFBQUcsR0FBSCxHQUFHLENBQWE7SUFBSSxDQUFDO0lBRXpDLGtDQUFRLEdBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQzNCLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hELFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUNwQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsOENBQThDO0lBQ3RDLGlDQUFPLEdBQWYsVUFBZ0IsT0FBb0I7UUFDbEMsSUFBSSxFQUFFLEdBQUcsd0pBQXdKLENBQUM7UUFFbEssRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQy9CLENBQUM7SUFDSCxDQUFDO0lBL0JIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsYUFBYTtZQUMxQixVQUFVLEVBQUUsQ0FBQyxnQ0FBd0IsQ0FBQyxDQUFDLGtDQUFrQztTQUMxRSxDQUFDOzt1QkFBQTtJQTJCRixzQkFBQztBQUFELENBMUJBLEFBMEJDLElBQUE7QUExQlksdUJBQWUsa0JBMEIzQixDQUFBIiwiZmlsZSI6ImF1dGgvc2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsIC8vIG5lY2Vzc2FyeSB3aGVuIHVzaW5nIHRzY29uZmlnIFwiY29tbW9uanNcIiBmb3IgZmlsZSBwYXRoIHJlc29sdXRpb25cbiAgc2VsZWN0b3I6ICdteS1zaWdudXAnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZ251cC5odG1sJyxcbiAgZGlyZWN0aXZlczogW1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU10gLy8gcmVxdWlyZWQgZm9yIG1vZGVsIGRyaXZlbiBmb3Jtc1xufSlcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBteUZvcm06IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIpIHsgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMubXlGb3JtLnZhbHVlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgZmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgbGFzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBlbWFpbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgdGhpcy5pc0VtYWlsXV0sXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICB9XG5cbiAgLy8gT25seSByZXR1bnMgYSB2YWx1ZSBpZiB0aGUgdmFsaWRhdGlvbiBmYWlsc1xuICBwcml2YXRlIGlzRW1haWwoY29udHJvbDogRm9ybUNvbnRyb2wpOiB7IFtzOiBzdHJpbmddOiBib29sZWFuIH0ge1xuICAgIHZhciByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuXG4gICAgaWYgKCFjb250cm9sLnZhbHVlLm1hdGNoKHJlKSkge1xuICAgICAgcmV0dXJuIHsgaW52YWxpZE1haWw6IHRydWUgfTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
