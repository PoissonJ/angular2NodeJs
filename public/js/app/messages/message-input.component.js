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
        this.showCancelButton = false;
        // Reset the form with a new hero AND restore 'pristine' class state
        // by toggling 'active' flag which causes the form
        // to be removed/re-added in a tick via NgIf
        this.active = true;
    }
    MessageInputComponent.prototype.onSubmit = function (model) {
        var _this = this;
        if (this.showCancelButton) {
            // Edit
            // this.model.content = model.content; // Update front end for better experience
            this.model = new message_1.Message("");
            this.showCancelButton = false;
            this._resetForm();
        }
        else {
            var message = new message_1.Message(model.content, null, 'Dummy');
            this._messageService.addMessage(message)
                .subscribe(// Check for returned data
            function (// Check for returned data
                data) {
                _this._messageService.messages.push(data); // Update angulars message service to stay in sync
            }, function (error) { return console.log(JSON.stringify(error)); });
            this.model = new message_1.Message("");
            this._resetForm();
        }
    };
    MessageInputComponent.prototype.onCancel = function () {
        this.model = new message_1.Message("");
    };
    MessageInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._messageService.messageIsEdit.subscribe(function (message) {
            _this.model = message;
            _this.showCancelButton = true;
        });
    };
    MessageInputComponent.prototype._resetForm = function () {
        var _this = this;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFHaEQsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBQ3BDLGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBT25EO0lBU0UsaUNBQWlDO0lBQ2pDLCtCQUFvQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFSbkQsVUFBSyxHQUFZLElBQUksaUJBQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFDekMsb0VBQW9FO1FBQ3BFLGtEQUFrRDtRQUNsRCw0Q0FBNEM7UUFDNUMsV0FBTSxHQUFZLElBQUksQ0FBQztJQUdnQyxDQUFDO0lBRXhELHdDQUFRLEdBQVIsVUFBUyxLQUFjO1FBQXZCLGlCQW9CQztRQW5CQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE9BQU87WUFDUCxnRkFBZ0Y7WUFDaEYsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGlCQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBTSxPQUFPLEdBQVksSUFBSSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ25FLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztpQkFDckMsU0FBUyxDQUFFLDBCQUEwQjtZQUNwQyxVQURVLDBCQUEwQjtnQkFDcEMsSUFBSTtnQkFDRixLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxrREFBa0Q7WUFDOUYsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQWxDLENBQWtDLENBQzVDLENBQUM7WUFFSixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksaUJBQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQztJQUNILENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGlCQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FDMUMsVUFBQSxPQUFPO1lBQ0wsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7WUFDckIsS0FBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUMvQixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTywwQ0FBVSxHQUFsQjtRQUFBLGlCQUdDO1FBRkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksRUFBbEIsQ0FBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBdkRIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSxtQkFBbUI7U0FDakMsQ0FBQzs7NkJBQUE7SUFvREYsNEJBQUM7QUFBRCxDQW5EQSxBQW1EQyxJQUFBO0FBbkRZLDZCQUFxQix3QkFtRGpDLENBQUEiLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtOZ0Zvcm19IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdteS1tZXNzYWdlLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICdtZXNzYWdlSW5wdXQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZUlucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBtb2RlbDogTWVzc2FnZSA9IG5ldyBNZXNzYWdlKFwiXCIpO1xuICBwdWJsaWMgc2hvd0NhbmNlbEJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBSZXNldCB0aGUgZm9ybSB3aXRoIGEgbmV3IGhlcm8gQU5EIHJlc3RvcmUgJ3ByaXN0aW5lJyBjbGFzcyBzdGF0ZVxuICAvLyBieSB0b2dnbGluZyAnYWN0aXZlJyBmbGFnIHdoaWNoIGNhdXNlcyB0aGUgZm9ybVxuICAvLyB0byBiZSByZW1vdmVkL3JlLWFkZGVkIGluIGEgdGljayB2aWEgTmdJZlxuICBhY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8vIEdldCBpbnN0YW5jZSBvZiBtZXNhZ2Ugc2VydmljZVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHsgfVxuXG4gIG9uU3VibWl0KG1vZGVsOiBNZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMuc2hvd0NhbmNlbEJ1dHRvbikgeyAvLyBFZGl0IGEgbWVzc2FnZVxuICAgICAgLy8gRWRpdFxuICAgICAgLy8gdGhpcy5tb2RlbC5jb250ZW50ID0gbW9kZWwuY29udGVudDsgLy8gVXBkYXRlIGZyb250IGVuZCBmb3IgYmV0dGVyIGV4cGVyaWVuY2VcbiAgICAgIHRoaXMubW9kZWwgPSBuZXcgTWVzc2FnZShcIlwiKTtcbiAgICAgIHRoaXMuc2hvd0NhbmNlbEJ1dHRvbiA9IGZhbHNlO1xuICAgICAgdGhpcy5fcmVzZXRGb3JtKCk7XG4gICAgfSBlbHNlIHsgLy8gTmV3IG1lc3NhZ2VcbiAgICAgIGNvbnN0IG1lc3NhZ2U6IE1lc3NhZ2UgPSBuZXcgTWVzc2FnZShtb2RlbC5jb250ZW50LCBudWxsLCAnRHVtbXknKTtcbiAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmFkZE1lc3NhZ2UobWVzc2FnZSlcbiAgICAgICAgLnN1YnNjcmliZSggLy8gQ2hlY2sgZm9yIHJldHVybmVkIGRhdGFcbiAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzLnB1c2goZGF0YSk7IC8vIFVwZGF0ZSBhbmd1bGFycyBtZXNzYWdlIHNlcnZpY2UgdG8gc3RheSBpbiBzeW5jXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpXG4gICAgICAgICk7XG5cbiAgICAgIHRoaXMubW9kZWwgPSBuZXcgTWVzc2FnZShcIlwiKTtcbiAgICAgIHRoaXMuX3Jlc2V0Rm9ybSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2FuY2VsKCkge1xuICAgIHRoaXMubW9kZWwgPSBuZXcgTWVzc2FnZShcIlwiKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VJc0VkaXQuc3Vic2NyaWJlKFxuICAgICAgbWVzc2FnZSA9PiB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLnNob3dDYW5jZWxCdXR0b24gPSB0cnVlO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9yZXNldEZvcm0oKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWN0aXZlID0gdHJ1ZSwgMCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
