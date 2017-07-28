import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './products.service';
//import { appService } from './app.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  //template: `<h1>Hello {{name}}</h1><div>To Tutorials Point</div>`,
  templateUrl: 'app/app.component.html',
  providers: [ProductService]
})
export class AppComponent { 
  appTitle: string = 'Welcome';
  name: string = 'Ashwin';
  appStatus: boolean = true;
  appList: any[] = [{
    "ID": "1",
    "Name": "One",
    "url": 'app/images/one.png'
  },
  {
    "ID": "2",
    "Name": "Two",
    "url": 'app/images/two.png'
  }];
  iproducts: IProduct[];
  constructor(private _product: ProductService) {
    
  }
  
  ngOnInit() : void {
    this._product.getproducts()
    .subscribe(iproducts => this.iproducts = iproducts);
  }
}
