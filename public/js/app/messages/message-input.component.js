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
        this.model = new message_1.Message("");
        // Reset the form with a new hero AND restore 'pristine' class state
        // by toggling 'active' flag which causes the form
        // to be removed/re-added in a tick via NgIf
        this.active = true;
    }
    MessageInputComponent.prototype.onSubmit = function (model) {
        var _this = this;
        var message = new message_1.Message(model.content, null, 'Dummy');
        this._messageService.addMessage(message)
            .subscribe(// Check for returned data
        function (// Check for returned data
            data) {
            _this._messageService.messages.push(data); // Update angulars message service to stay in sync
        }, function (error) { return console.log(JSON.stringify(error)); });
        this.model.content = "";
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    MessageInputComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-message-input',
            templateUrl: 'messageInput.html'
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageInputComponent);
    return MessageInputComponent;
}());
exports.MessageInputComponent = MessageInputComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFHeEMsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBQ3BDLGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBT25EO0lBSUUsaUNBQWlDO0lBQ2pDLCtCQUFvQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFIbkQsVUFBSyxHQUFHLElBQUksaUJBQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUl4QixvRUFBb0U7UUFDcEUsa0RBQWtEO1FBQ2xELDRDQUE0QztRQUM1QyxXQUFNLEdBQVksSUFBSSxDQUFDO0lBSmdDLENBQUM7SUFNeEQsd0NBQVEsR0FBUixVQUFTLEtBQWM7UUFBdkIsaUJBYUM7UUFaQyxJQUFNLE9BQU8sR0FBWSxJQUFJLGlCQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2FBQ3JDLFNBQVMsQ0FBRSwwQkFBMEI7UUFDcEMsVUFEVSwwQkFBMEI7WUFDcEMsSUFBSTtZQUNGLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGtEQUFrRDtRQUM5RixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBbEMsQ0FBa0MsQ0FDNUMsQ0FBQztRQUVKLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFsQixDQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUE3Qkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLG1CQUFtQjtTQUNqQyxDQUFDOzs2QkFBQTtJQTBCRiw0QkFBQztBQUFELENBekJBLEFBeUJDLElBQUE7QUF6QlksNkJBQXFCLHdCQXlCakMsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtOZ0Zvcm19IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdteS1tZXNzYWdlLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICdtZXNzYWdlSW5wdXQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZUlucHV0Q29tcG9uZW50IHtcblxuICBtb2RlbCA9IG5ldyBNZXNzYWdlKFwiXCIpO1xuXG4gIC8vIEdldCBpbnN0YW5jZSBvZiBtZXNhZ2Ugc2VydmljZVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHsgfVxuICAvLyBSZXNldCB0aGUgZm9ybSB3aXRoIGEgbmV3IGhlcm8gQU5EIHJlc3RvcmUgJ3ByaXN0aW5lJyBjbGFzcyBzdGF0ZVxuICAvLyBieSB0b2dnbGluZyAnYWN0aXZlJyBmbGFnIHdoaWNoIGNhdXNlcyB0aGUgZm9ybVxuICAvLyB0byBiZSByZW1vdmVkL3JlLWFkZGVkIGluIGEgdGljayB2aWEgTmdJZlxuICBhY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIG9uU3VibWl0KG1vZGVsOiBNZXNzYWdlKSB7XG4gICAgY29uc3QgbWVzc2FnZTogTWVzc2FnZSA9IG5ldyBNZXNzYWdlKG1vZGVsLmNvbnRlbnQsIG51bGwsICdEdW1teScpO1xuICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmFkZE1lc3NhZ2UobWVzc2FnZSlcbiAgICAgIC5zdWJzY3JpYmUoIC8vIENoZWNrIGZvciByZXR1cm5lZCBkYXRhXG4gICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzLnB1c2goZGF0YSk7IC8vIFVwZGF0ZSBhbmd1bGFycyBtZXNzYWdlIHNlcnZpY2UgdG8gc3RheSBpbiBzeW5jXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSlcbiAgICAgICk7XG5cbiAgICB0aGlzLm1vZGVsLmNvbnRlbnQ9XCJcIjtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hY3RpdmUgPSB0cnVlLCAwKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
