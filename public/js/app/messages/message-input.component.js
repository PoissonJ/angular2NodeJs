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
        this.model.content = this.originalTextBeforeEdit;
        this.model = new message_1.Message("");
        this._resetForm();
    };
    MessageInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._messageService.messageIsEdit.subscribe(function (message) {
            _this.model = message;
            _this.originalTextBeforeEdit = message.content;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFHaEQsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBQ3BDLGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBT25EO0lBVUUsaUNBQWlDO0lBQ2pDLCtCQUFvQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFUbkQsVUFBSyxHQUFZLElBQUksaUJBQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUxQixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFDekMsb0VBQW9FO1FBQ3BFLGtEQUFrRDtRQUNsRCw0Q0FBNEM7UUFDNUMsV0FBTSxHQUFZLElBQUksQ0FBQztJQUdnQyxDQUFDO0lBRXhELHdDQUFRLEdBQVI7UUFBQSxpQkF3QkM7UUF2QkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUMxQixPQUFPO1lBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDM0MsU0FBUyxDQUNSLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsRUFDekIsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUM1QixDQUFDO1lBRUosSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGlCQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQU0sT0FBTyxHQUFZLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2lCQUNyQyxTQUFTLENBQUUsMEJBQTBCO1lBQ3BDLFVBRFUsMEJBQTBCO2dCQUNwQyxJQUFJO2dCQUNGLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGtEQUFrRDtZQUM5RixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBbEMsQ0FBa0MsQ0FDNUMsQ0FBQztZQUVKLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxpQkFBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDO0lBQ0gsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUM7UUFDakQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGlCQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQzFDLFVBQUEsT0FBTztZQUNMLEtBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxzQkFBc0IsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDL0IsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRU8sMENBQVUsR0FBbEI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksRUFBbEIsQ0FBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBaEVIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSxtQkFBbUI7U0FDakMsQ0FBQzs7NkJBQUE7SUE2REYsNEJBQUM7QUFBRCxDQTVEQSxBQTREQyxJQUFBO0FBNURZLDZCQUFxQix3QkE0RGpDLENBQUEiLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtOZ0Zvcm19IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdteS1tZXNzYWdlLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICdtZXNzYWdlSW5wdXQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZUlucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBtb2RlbDogTWVzc2FnZSA9IG5ldyBNZXNzYWdlKFwiXCIpO1xuICBvcmlnaW5hbFRleHRCZWZvcmVFZGl0OiBzdHJpbmc7XG4gIHB1YmxpYyBzaG93Q2FuY2VsQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XG4gIC8vIFJlc2V0IHRoZSBmb3JtIHdpdGggYSBuZXcgaGVybyBBTkQgcmVzdG9yZSAncHJpc3RpbmUnIGNsYXNzIHN0YXRlXG4gIC8vIGJ5IHRvZ2dsaW5nICdhY3RpdmUnIGZsYWcgd2hpY2ggY2F1c2VzIHRoZSBmb3JtXG4gIC8vIHRvIGJlIHJlbW92ZWQvcmUtYWRkZWQgaW4gYSB0aWNrIHZpYSBOZ0lmXG4gIGFjdGl2ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgLy8gR2V0IGluc3RhbmNlIG9mIG1lc2FnZSBzZXJ2aWNlXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkgeyB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMuc2hvd0NhbmNlbEJ1dHRvbikgeyAvLyBFZGl0IGEgbWVzc2FnZVxuICAgICAgLy8gRWRpdFxuICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UudXBkYXRlTWVzc2FnZSh0aGlzLm1vZGVsKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICk7XG5cbiAgICAgIHRoaXMubW9kZWwgPSBuZXcgTWVzc2FnZShcIlwiKTtcbiAgICAgIHRoaXMuX3Jlc2V0Rm9ybSgpO1xuICAgIH0gZWxzZSB7IC8vIE5ldyBtZXNzYWdlXG4gICAgICBjb25zdCBtZXNzYWdlOiBNZXNzYWdlID0gbmV3IE1lc3NhZ2UodGhpcy5tb2RlbC5jb250ZW50LCBudWxsLCAnRHVtbXknKTtcbiAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmFkZE1lc3NhZ2UobWVzc2FnZSlcbiAgICAgICAgLnN1YnNjcmliZSggLy8gQ2hlY2sgZm9yIHJldHVybmVkIGRhdGFcbiAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzLnB1c2goZGF0YSk7IC8vIFVwZGF0ZSBhbmd1bGFycyBtZXNzYWdlIHNlcnZpY2UgdG8gc3RheSBpbiBzeW5jXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpXG4gICAgICAgICk7XG5cbiAgICAgIHRoaXMubW9kZWwgPSBuZXcgTWVzc2FnZShcIlwiKTtcbiAgICAgIHRoaXMuX3Jlc2V0Rm9ybSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2FuY2VsKCkge1xuICAgIHRoaXMubW9kZWwuY29udGVudCA9IHRoaXMub3JpZ2luYWxUZXh0QmVmb3JlRWRpdDtcbiAgICB0aGlzLm1vZGVsID0gbmV3IE1lc3NhZ2UoXCJcIik7XG4gICAgdGhpcy5fcmVzZXRGb3JtKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5tZXNzYWdlSXNFZGl0LnN1YnNjcmliZShcbiAgICAgIG1lc3NhZ2UgPT4ge1xuICAgICAgICB0aGlzLm1vZGVsID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFRleHRCZWZvcmVFZGl0ID0gbWVzc2FnZS5jb250ZW50O1xuICAgICAgICB0aGlzLnNob3dDYW5jZWxCdXR0b24gPSB0cnVlO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9yZXNldEZvcm0oKSB7XG4gICAgdGhpcy5zaG93Q2FuY2VsQnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWN0aXZlID0gdHJ1ZSwgMCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
