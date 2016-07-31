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
    MessageInputComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.showCancelButton) {
            // Edit
            this._messageService.updateMessage(this.model)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
            this.model = new message_1.Message("");
            this._resetForm();
        }
        else {
            var message = new message_1.Message(this.model.content, null, 'Dummy');
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
        this._resetForm();
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
        this.showCancelButton = false;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFHaEQsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBQ3BDLGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBT25EO0lBU0UsaUNBQWlDO0lBQ2pDLCtCQUFvQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFSbkQsVUFBSyxHQUFZLElBQUksaUJBQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFDekMsb0VBQW9FO1FBQ3BFLGtEQUFrRDtRQUNsRCw0Q0FBNEM7UUFDNUMsV0FBTSxHQUFZLElBQUksQ0FBQztJQUdnQyxDQUFDO0lBRXhELHdDQUFRLEdBQVI7UUFBQSxpQkF3QkM7UUF2QkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUMxQixPQUFPO1lBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDM0MsU0FBUyxDQUNSLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsRUFDekIsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUM1QixDQUFDO1lBRUosSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGlCQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQU0sT0FBTyxHQUFZLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2lCQUNyQyxTQUFTLENBQUUsMEJBQTBCO1lBQ3BDLFVBRFUsMEJBQTBCO2dCQUNwQyxJQUFJO2dCQUNGLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGtEQUFrRDtZQUM5RixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBbEMsQ0FBa0MsQ0FDNUMsQ0FBQztZQUVKLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxpQkFBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDO0lBQ0gsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksaUJBQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FDMUMsVUFBQSxPQUFPO1lBQ0wsS0FBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7WUFDckIsS0FBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUMvQixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTywwQ0FBVSxHQUFsQjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFsQixDQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUE3REg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLG1CQUFtQjtTQUNqQyxDQUFDOzs2QkFBQTtJQTBERiw0QkFBQztBQUFELENBekRBLEFBeURDLElBQUE7QUF6RFksNkJBQXFCLHdCQXlEakMsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge05nRm9ybX0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuL21lc3NhZ2Uuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ215LW1lc3NhZ2UtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJ21lc3NhZ2VJbnB1dC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIG1vZGVsOiBNZXNzYWdlID0gbmV3IE1lc3NhZ2UoXCJcIik7XG4gIHB1YmxpYyBzaG93Q2FuY2VsQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XG4gIC8vIFJlc2V0IHRoZSBmb3JtIHdpdGggYSBuZXcgaGVybyBBTkQgcmVzdG9yZSAncHJpc3RpbmUnIGNsYXNzIHN0YXRlXG4gIC8vIGJ5IHRvZ2dsaW5nICdhY3RpdmUnIGZsYWcgd2hpY2ggY2F1c2VzIHRoZSBmb3JtXG4gIC8vIHRvIGJlIHJlbW92ZWQvcmUtYWRkZWQgaW4gYSB0aWNrIHZpYSBOZ0lmXG4gIGFjdGl2ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgLy8gR2V0IGluc3RhbmNlIG9mIG1lc2FnZSBzZXJ2aWNlXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkgeyB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMuc2hvd0NhbmNlbEJ1dHRvbikgeyAvLyBFZGl0IGEgbWVzc2FnZVxuICAgICAgLy8gRWRpdFxuICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UudXBkYXRlTWVzc2FnZSh0aGlzLm1vZGVsKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICk7XG5cbiAgICAgIHRoaXMubW9kZWwgPSBuZXcgTWVzc2FnZShcIlwiKTtcbiAgICAgIHRoaXMuX3Jlc2V0Rm9ybSgpO1xuICAgIH0gZWxzZSB7IC8vIE5ldyBtZXNzYWdlXG4gICAgICBjb25zdCBtZXNzYWdlOiBNZXNzYWdlID0gbmV3IE1lc3NhZ2UodGhpcy5tb2RlbC5jb250ZW50LCBudWxsLCAnRHVtbXknKTtcbiAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmFkZE1lc3NhZ2UobWVzc2FnZSlcbiAgICAgICAgLnN1YnNjcmliZSggLy8gQ2hlY2sgZm9yIHJldHVybmVkIGRhdGFcbiAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzLnB1c2goZGF0YSk7IC8vIFVwZGF0ZSBhbmd1bGFycyBtZXNzYWdlIHNlcnZpY2UgdG8gc3RheSBpbiBzeW5jXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpXG4gICAgICAgICk7XG5cbiAgICAgIHRoaXMubW9kZWwgPSBuZXcgTWVzc2FnZShcIlwiKTtcbiAgICAgIHRoaXMuX3Jlc2V0Rm9ybSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2FuY2VsKCkge1xuICAgIHRoaXMubW9kZWwgPSBuZXcgTWVzc2FnZShcIlwiKTtcbiAgICB0aGlzLl9yZXNldEZvcm0oKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VJc0VkaXQuc3Vic2NyaWJlKFxuICAgICAgbWVzc2FnZSA9PiB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLnNob3dDYW5jZWxCdXR0b24gPSB0cnVlO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9yZXNldEZvcm0oKSB7XG4gICAgdGhpcy5zaG93Q2FuY2VsQnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWN0aXZlID0gdHJ1ZSwgMCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
