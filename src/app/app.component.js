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
var products_service_1 = require("./products.service");
var app_service_1 = require("./app.service");
require("rxjs/add/operator/map");
var AppComponent = (function () {
    function AppComponent(_product, _appService) {
        this._product = _product;
        this._appService = _appService;
        // Event Handling
        this.Status = true;
        // Event Handling
        this.appTitle = 'Welcome';
        this.name = 'Ashwin';
        this.appStatus = true;
        this.current_date = new Date();
        this.money = 12.3;
        this.value = "";
        this.appList = [{
                "ID": "1",
                "Name": "One",
                "url": 'app/images/one.png'
            },
            {
                "ID": "2",
                "Name": "Two",
                "url": 'app/images/two.png'
            }];
        this.TutorialName = "My Tutorial";
        this.appList1 = ["Apple", "Accenture", "Google", "Microsoft", "Adobe"];
    }
    AppComponent.prototype.clicked = function (event) {
        this.Status = !this.Status;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._product.getproducts()
            .subscribe(function (iproducts) { return _this.iproducts = iproducts; });
        this.value = this._appService.getApp();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        //template: `<h1>Hello {{name}}</h1><div>To Tutorials Point</div>`,
        templateUrl: 'app/app.component.html',
        providers: [products_service_1.ProductService, app_service_1.appService]
    }),
    __metadata("design:paramtypes", [products_service_1.ProductService,
        app_service_1.appService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map