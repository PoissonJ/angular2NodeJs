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
        this.message = new message_1.Message('The content', null, 'Max');
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBdUJsQztJQUFBO1FBQ0UsWUFBTyxHQUFZLElBQUksaUJBQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRTdELENBQUM7SUF4QkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsTUFBTSxFQUFFLENBQUMseVBBYVIsQ0FBQztTQUdILENBQUM7O3dCQUFBO0lBSUYsdUJBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQUhZLHdCQUFnQixtQkFHNUIsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LW1lc3NhZ2UnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLCAvLyBuZWNlc3Nhcnkgd2hlbiB1c2luZyB0c2NvbmZpZyBcImNvbW1vbmpzXCIgZm9yIGZpbGUgcGF0aCByZXNvbHV0aW9uXG4gIHRlbXBsYXRlVXJsOiAnLi9tZXNzYWdlVGVtcGxhdGUuaHRtbCcsXG4gIHN0eWxlczogW2BcbiAgICAuYXV0aG9yIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuICAgIC5jb25maWcge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB3aWR0aDogMTklO1xuICAgIH1cbiAgYF1cbiAgLy8gdGVtcGxhdGU6IGBcblxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcbiAgbWVzc2FnZTogTWVzc2FnZSA9IG5ldyBNZXNzYWdlKCdUaGUgY29udGVudCcsIG51bGwsICdNYXgnKTtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
