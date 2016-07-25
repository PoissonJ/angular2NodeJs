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
var message_list_component_1 = require('./message-list.component');
var message_input_component_1 = require('./message-input.component');
var MessagesComponent = (function () {
    function MessagesComponent() {
    }
    MessagesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-messages',
            templateUrl: 'messages.html',
            directives: [message_list_component_1.MessageListComponent, message_input_component_1.MessageInputComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVDQUFxQywwQkFBMEIsQ0FBQyxDQUFBO0FBQ2hFLHdDQUFzQywyQkFBMkIsQ0FBQyxDQUFBO0FBUWxFO0lBQUE7SUFFQSxDQUFDO0lBUkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSxlQUFlO1lBQzVCLFVBQVUsRUFBRSxDQUFDLDZDQUFvQixFQUFFLCtDQUFxQixDQUFDO1NBQzFELENBQUM7O3lCQUFBO0lBR0Ysd0JBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLHlCQUFpQixvQkFFN0IsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1lc3NhZ2VMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IE1lc3NhZ2VJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vbWVzc2FnZS1pbnB1dC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdteS1tZXNzYWdlcycsXG4gIHRlbXBsYXRlVXJsOiAnbWVzc2FnZXMuaHRtbCcsXG4gIGRpcmVjdGl2ZXM6IFtNZXNzYWdlTGlzdENvbXBvbmVudCwgTWVzc2FnZUlucHV0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlc0NvbXBvbmVudCB7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
