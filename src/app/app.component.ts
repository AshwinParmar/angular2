import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './products.service';
import { appService } from './app.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// ng2-pagination
import {PaginatePipe, PaginationService} from 'ng2-pagination';

// Import child container
import { ChildComponent } from './child-component';

@Component({
  selector: 'my-app',
  //template: `<h1>Hello {{name}}</h1><div>To Tutorials Point</div>`,
  templateUrl: 'app/app.component.html',
  providers: [ProductService, appService]
  //template: '<p>Multiplier: {{2 | Multiplier: 10}}</p>'
  
})
export class AppComponent { 

  // Event Handling
  Status: boolean = true;
  clicked(event:any) {
    this.Status = !this.Status;
  }
  // Event Handling

  appTitle: string = 'Welcome';
  name: string = 'Ashwin';
  appStatus: boolean = true;
  current_date = new Date();
  money: number = 12.3;
  value: string = "";
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
  
  TutorialName: string = "My Tutorial";
  appList1: string[] = ["Apple", "Accenture", "Google", "Microsoft", "Adobe"];
  
  constructor(
    private _product: ProductService,
    private _appService: appService
  ) {
    
  }
  
  ngOnInit() : void {
    this._product.getproducts()
    .subscribe(iproducts => this.iproducts = iproducts);
    this.value = this._appService.getApp();
  }
}
