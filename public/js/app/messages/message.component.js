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
var message_1 = require("./message");
var MessageComponent = (function () {
    function MessageComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', message_1.Message)
    ], MessageComponent.prototype, "message", void 0);
    MessageComponent = __decorate([
        core_1.Component({
            selector: 'my-message',
            moduleId: module.id,
            templateUrl: './messageTemplate.html',
            styles: ["\n    .author {\n      display: inline-block;\n      font-style: italic;\n      font-size: 12px;\n      width: 80%;\n    }\n    .config {\n      display: inline-block;\n      text-align: right;\n      font-size: 12px;\n      width: 19%;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0Msd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBcUJsQztJQUFBO0lBRUEsQ0FBQztJQURDO1FBQUMsWUFBSyxFQUFFOztxREFBQTtJQXBCVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxNQUFNLEVBQUUsQ0FBQyx5UEFhUixDQUFDO1NBQ0gsQ0FBQzs7d0JBQUE7SUFHRix1QkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksd0JBQWdCLG1CQUU1QixDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LW1lc3NhZ2UnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLCAvLyBuZWNlc3Nhcnkgd2hlbiB1c2luZyB0c2NvbmZpZyBcImNvbW1vbmpzXCIgZm9yIGZpbGUgcGF0aCByZXNvbHV0aW9uXG4gIHRlbXBsYXRlVXJsOiAnLi9tZXNzYWdlVGVtcGxhdGUuaHRtbCcsXG4gIHN0eWxlczogW2BcbiAgICAuYXV0aG9yIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuICAgIC5jb25maWcge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB3aWR0aDogMTklO1xuICAgIH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG1lc3NhZ2U6IE1lc3NhZ2U7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
