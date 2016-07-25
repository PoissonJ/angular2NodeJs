"use strict";
var MessageService = (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.addMessage = function (message) {
        this.messages.push(message);
        console.log(this.messages);
    };
    MessageService.prototype.getMessage = function () {
        return this.messages;
    };
    MessageService.prototype.deleteMessage = function (message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    };
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFBQTtRQUNVLGFBQVEsR0FBYyxFQUFFLENBQUM7SUFjbkMsQ0FBQztJQVpDLG1DQUFVLEdBQVYsVUFBVyxPQUFnQjtRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsT0FBZ0I7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSxzQkFBYyxpQkFlMUIsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL21lc3NhZ2VcIjtcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XG4gIHByaXZhdGUgbWVzc2FnZXM6IE1lc3NhZ2VbXSA9IFtdO1xuXG4gIGFkZE1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2VzKTtcbiAgfVxuXG4gIGdldE1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZXM7XG4gIH1cblxuICBkZWxldGVNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZSh0aGlzLm1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSksIDEpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
