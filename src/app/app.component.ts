import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  //template: `<h1>Hello {{name}}</h1><div>To Tutorials Point</div>`,
  templateUrl: 'app/app.component.html'
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
}
