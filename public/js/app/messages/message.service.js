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
var http_1 = require("@angular/http");
require('rxjs/Rx'); // .map()
var Observable_1 = require("rxjs/Observable");
var message_1 = require("./message");
var MessageService = (function () {
    function MessageService(_http) {
        this._http = _http;
        this.messages = [];
    }
    MessageService.prototype.addMessage = function (message) {
        var body = JSON.stringify(message);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post('http://localhost:3000/message', body, { headers: headers })
            .map(function (response) {
            // transform into a message of our custom message component
            var data = response.json().obj;
            var message = new message_1.Message(data.content, data._id, 'Dummy', null);
            return message;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    MessageService.prototype.getMessages = function () {
        return this._http.get('http://localhost:3000/message')
            .map(function (response) {
            // transform into an array of our custom message component
            var data = response.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                var message = new message_1.Message(data[i].content, data[i]._id, 'Dummy', null);
                objs.push(message);
            }
            ;
            return objs;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    MessageService.prototype.editMessage = function (message) {
        this.messages[this.messages.indexOf(message)] = new message_1.Message('Edited', null, 'Dummy');
    };
    MessageService.prototype.deleteMessage = function (message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHFCQUE0QixlQUFlLENBQUMsQ0FBQTtBQUM1QyxRQUFPLFNBQVMsQ0FBQyxDQUFBLENBQUMsU0FBUztBQUMzQiwyQkFBeUIsaUJBQWlCLENBQUMsQ0FBQTtBQUMzQyx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUFHbEM7SUFHRSx3QkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFGeEIsYUFBUSxHQUFjLEVBQUUsQ0FBQztJQUVFLENBQUM7SUFFbkMsbUNBQVUsR0FBVixVQUFXLE9BQWdCO1FBQ3pCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBRWxFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDOUUsR0FBRyxDQUFDLFVBQUEsUUFBUTtZQUNYLDJEQUEyRDtZQUMzRCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2pDLElBQUksT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2pFLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDakIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQzthQUNuRCxHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1gsMERBQTBEO1lBQzFELElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDakMsSUFBSSxJQUFJLEdBQVUsRUFBRSxDQUFDO1lBQ3JCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNyQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQixDQUFDO1lBQUEsQ0FBQztZQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksaUJBQU8sQ0FDekQsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLENBQ3hCLENBQUM7SUFDSixDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLE9BQWdCO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUEzQ0g7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQTRDYixxQkFBQztBQUFELENBM0NBLEFBMkNDLElBQUE7QUEzQ1ksc0JBQWMsaUJBMkMxQixDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCAncnhqcy9SeCc7IC8vIC5tYXAoKVxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL21lc3NhZ2VcIjtcblxuQEluamVjdGFibGUoKSAvLyBEb2VzIG5vdGhpbmcgZXhjZXB0IGFsbG93IHVzIHRvIGluamVjdCB0aGUgSFRUUCBzZXJ2aWNlXG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xuICBwdWJsaWMgbWVzc2FnZXM6IE1lc3NhZ2VbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XG5cbiAgYWRkTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKSB7XG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xuXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL21lc3NhZ2UnLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHtcbiAgICAgICAgLy8gdHJhbnNmb3JtIGludG8gYSBtZXNzYWdlIG9mIG91ciBjdXN0b20gbWVzc2FnZSBjb21wb25lbnRcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmo7XG4gICAgICAgIGxldCBtZXNzYWdlID0gbmV3IE1lc3NhZ2UoZGF0YS5jb250ZW50LCBkYXRhLl9pZCwgJ0R1bW15JywgbnVsbCk7XG4gICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xuICB9XG5cbiAgZ2V0TWVzc2FnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbWVzc2FnZScpXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHtcbiAgICAgICAgLy8gdHJhbnNmb3JtIGludG8gYW4gYXJyYXkgb2Ygb3VyIGN1c3RvbSBtZXNzYWdlIGNvbXBvbmVudFxuICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcbiAgICAgICAgbGV0IG9ianM6IGFueVtdID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBtZXNzYWdlID0gbmV3IE1lc3NhZ2UoZGF0YVtpXS5jb250ZW50LCBkYXRhW2ldLl9pZCwgJ0R1bW15JywgbnVsbCk7XG4gICAgICAgICAgb2Jqcy5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gb2JqcztcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpO1xuICB9XG5cbiAgZWRpdE1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZXNbdGhpcy5tZXNzYWdlcy5pbmRleE9mKG1lc3NhZ2UpXSA9IG5ldyBNZXNzYWdlKFxuICAgICAgJ0VkaXRlZCcsIG51bGwsICdEdW1teSdcbiAgICApO1xuICB9XG5cbiAgZGVsZXRlTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UodGhpcy5tZXNzYWdlcy5pbmRleE9mKG1lc3NhZ2UpLCAxKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
