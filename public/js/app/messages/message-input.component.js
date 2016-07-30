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
        // TODO: Workaround until NgForm has a reset method (#6822)
        this.active = true;
    }
    MessageInputComponent.prototype.onSubmit = function (model) {
        var _this = this;
        this._messageService.addMessage(model);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFHeEMsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBQ3BDLGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBT25EO0lBSUUsaUNBQWlDO0lBQ2pDLCtCQUFvQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFIbkQsVUFBSyxHQUFHLElBQUksaUJBQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUl4QixvRUFBb0U7UUFDcEUsa0RBQWtEO1FBQ2xELDRDQUE0QztRQUM1QywyREFBMkQ7UUFDM0QsV0FBTSxHQUFZLElBQUksQ0FBQztJQUxnQyxDQUFDO0lBT3hELHdDQUFRLEdBQVIsVUFBUyxLQUFjO1FBQXZCLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQWxCLENBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQXRCSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsbUJBQW1CO1NBQ2pDLENBQUM7OzZCQUFBO0lBbUJGLDRCQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQTtBQWxCWSw2QkFBcUIsd0JBa0JqQyxDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge05nRm9ybX0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuL21lc3NhZ2Uuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ215LW1lc3NhZ2UtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJ21lc3NhZ2VJbnB1dC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlSW5wdXRDb21wb25lbnQge1xuXG4gIG1vZGVsID0gbmV3IE1lc3NhZ2UoXCJcIik7XG5cbiAgLy8gR2V0IGluc3RhbmNlIG9mIG1lc2FnZSBzZXJ2aWNlXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkgeyB9XG4gIC8vIFJlc2V0IHRoZSBmb3JtIHdpdGggYSBuZXcgaGVybyBBTkQgcmVzdG9yZSAncHJpc3RpbmUnIGNsYXNzIHN0YXRlXG4gIC8vIGJ5IHRvZ2dsaW5nICdhY3RpdmUnIGZsYWcgd2hpY2ggY2F1c2VzIHRoZSBmb3JtXG4gIC8vIHRvIGJlIHJlbW92ZWQvcmUtYWRkZWQgaW4gYSB0aWNrIHZpYSBOZ0lmXG4gIC8vIFRPRE86IFdvcmthcm91bmQgdW50aWwgTmdGb3JtIGhhcyBhIHJlc2V0IG1ldGhvZCAoIzY4MjIpXG4gIGFjdGl2ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgb25TdWJtaXQobW9kZWw6IE1lc3NhZ2UpIHtcbiAgICB0aGlzLl9tZXNzYWdlU2VydmljZS5hZGRNZXNzYWdlKG1vZGVsKTtcbiAgICB0aGlzLm1vZGVsLmNvbnRlbnQ9XCJcIjtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hY3RpdmUgPSB0cnVlLCAwKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
