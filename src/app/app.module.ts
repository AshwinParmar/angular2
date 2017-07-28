import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';

// Import Routes File
import { AppProduct } from './product.component';
import { AppInventory } from './inventory.component';
import { PageNotFoundComponent } from './NotFound.component';
import { RouterModule, Routes } from '@angular/router';

// Form Component
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './product-form.component';

// Import ng2-pagination component
import { Ng2PaginationModule } from 'ng2-pagination';

// Import Pipe : Multiplier
import { MultiplierPipe } from './multiplier.pipe';

// Import child component
import { ChildComponent } from './child.component';

// Define Routes URL
const appRoutes: Routes = [
  { path: 'Product', component: AppProduct },
  { path: 'Inventory', component: AppInventory },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule.forRoot(appRoutes), FormsModule ],
  declarations: [ AppComponent, AppProduct, AppInventory, PageNotFoundComponent, ProductFormComponent, MultiplierPipe, ChildComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
