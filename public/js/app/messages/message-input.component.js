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
var message_1 = require('./message');
var message_service_1 = require('./message.service');
var MessageInputComponent = (function () {
    // Get instance of mesage service
    function MessageInputComponent(_messageService) {
        this._messageService = _messageService;
    }
    MessageInputComponent.prototype.onCreate = function (content) {
        var message = new message_1.Message(content, null, 'Dummy');
        this._messageService.addMessage(message);
    };
    MessageInputComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-message-input',
            templateUrl: 'messageInput.html',
            providers: [message_service_1.MessageService] // List of injections
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageInputComponent);
    return MessageInputComponent;
}());
exports.MessageInputComponent = MessageInputComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBQ3BDLGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBUW5EO0lBRUUsaUNBQWlDO0lBQ2pDLCtCQUFvQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7SUFBSSxDQUFDO0lBRXhELHdDQUFRLEdBQVIsVUFBUyxPQUFlO1FBQ3RCLElBQU0sT0FBTyxHQUFZLElBQUksaUJBQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFkSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsbUJBQW1CO1lBQ2hDLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUMsQ0FBQSxxQkFBcUI7U0FDakQsQ0FBQzs7NkJBQUE7SUFVRiw0QkFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksNkJBQXFCLHdCQVNqQyxDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdteS1tZXNzYWdlLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICdtZXNzYWdlSW5wdXQuaHRtbCcsXG4gIHByb3ZpZGVyczogW01lc3NhZ2VTZXJ2aWNlXS8vIExpc3Qgb2YgaW5qZWN0aW9uc1xufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlSW5wdXRDb21wb25lbnQge1xuXG4gIC8vIEdldCBpbnN0YW5jZSBvZiBtZXNhZ2Ugc2VydmljZVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHsgfVxuXG4gIG9uQ3JlYXRlKGNvbnRlbnQ6IHN0cmluZykge1xuICAgIGNvbnN0IG1lc3NhZ2U6IE1lc3NhZ2UgPSBuZXcgTWVzc2FnZShjb250ZW50LCBudWxsLCAnRHVtbXknKTtcbiAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5hZGRNZXNzYWdlKG1lc3NhZ2UpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
