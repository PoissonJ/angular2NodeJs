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
var message_1 = require('./message');
var MessageListComponent = (function () {
    function MessageListComponent() {
        this.messages = [
            new message_1.Message('A new message', null, 'Jonathan'),
            new message_1.Message('Another message', null, 'Justin')
        ];
    }
    MessageListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-message-list',
            templateUrl: 'messageList.html',
            directives: [message_component_1.MessageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4QyxrQ0FBaUMscUJBQXFCLENBQUMsQ0FBQTtBQUN2RCx3QkFBd0IsV0FBVyxDQUFDLENBQUE7QUFRcEM7SUFBQTtRQUNFLGFBQVEsR0FBYztZQUNwQixJQUFJLGlCQUFPLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxVQUFVLENBQUM7WUFDOUMsSUFBSSxpQkFBTyxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxRQUFRLENBQUM7U0FDL0MsQ0FBQztJQUNKLENBQUM7SUFYRDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsa0JBQWtCO1lBQy9CLFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO1NBQy9CLENBQUM7OzRCQUFBO0lBTUYsMkJBQUM7QUFBRCxDQUxBLEFBS0MsSUFBQTtBQUxZLDRCQUFvQix1QkFLaEMsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbXktbWVzc2FnZS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICdtZXNzYWdlTGlzdC5odG1sJyxcbiAgZGlyZWN0aXZlczogW01lc3NhZ2VDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VMaXN0Q29tcG9uZW50IHtcbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXSA9IFtcbiAgICBuZXcgTWVzc2FnZSgnQSBuZXcgbWVzc2FnZScsIG51bGwsICdKb25hdGhhbicpLFxuICAgIG5ldyBNZXNzYWdlKCdBbm90aGVyIG1lc3NhZ2UnLCBudWxsLCAnSnVzdGluJylcbiAgXTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
