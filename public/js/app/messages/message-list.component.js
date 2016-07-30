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
var message_component_1 = require('./message.component');
var message_service_1 = require('./message.service');
var MessageListComponent = (function () {
    function MessageListComponent(_messageService) {
        this._messageService = _messageService;
    }
    MessageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._messageService.getMessages()
            .subscribe(function (messages) {
            _this.messages = messages; // Local message array
            _this._messageService.messages = messages; // Application message array
        });
    };
    MessageListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-message-list',
            templateUrl: 'messageList.html',
            directives: [message_component_1.MessageComponent]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCxrQ0FBaUMscUJBQXFCLENBQUMsQ0FBQTtBQUV2RCxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQVFuRDtJQUVFLDhCQUFvQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7SUFBSSxDQUFDO0lBSXhELHVDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFO2FBQy9CLFNBQVMsQ0FDUixVQUFBLFFBQVE7WUFDTixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLHNCQUFzQjtZQUNoRCxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyw0QkFBNEI7UUFDeEUsQ0FBQyxDQUNGLENBQUE7SUFDTCxDQUFDO0lBcEJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSxrQkFBa0I7WUFDL0IsVUFBVSxFQUFFLENBQUMsb0NBQWdCLENBQUM7U0FDL0IsQ0FBQzs7NEJBQUE7SUFnQkYsMkJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLDRCQUFvQix1QkFlaEMsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL21lc3NhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuL21lc3NhZ2Uuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ215LW1lc3NhZ2UtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnbWVzc2FnZUxpc3QuaHRtbCcsXG4gIGRpcmVjdGl2ZXM6IFtNZXNzYWdlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7IH1cblxuICBtZXNzYWdlczogTWVzc2FnZVtdO1xuXG4gIG5nT25Jbml0KCkgeyAvLyBiZXR0ZXIgZm9yIGhlYXZ5IHRhc2tzIHRoYXQgaW4gdGhlIGNvbnN0cnVjdG9yXG4gICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuZ2V0TWVzc2FnZXMoKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgbWVzc2FnZXMgPT4ge1xuICAgICAgICAgIHRoaXMubWVzc2FnZXMgPSBtZXNzYWdlczsgLy8gTG9jYWwgbWVzc2FnZSBhcnJheVxuICAgICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzID0gbWVzc2FnZXM7IC8vIEFwcGxpY2F0aW9uIG1lc3NhZ2UgYXJyYXlcbiAgICAgICAgfVxuICAgICAgKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
