import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import these and put them in the imports array below
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

// The App Component from the aqp.component.ts file
import { AppComponent } from './app.component';

// This is a service created to manage http requests (get, post)
//ng generate service http //ng g s http
import {HttpService} from "./http.service";

// ngx-bootstrap https://www.npmjs.com/package/ngx-bootstrap

// Allows the ability to route in Angular

import { AppRoutingModule } from './app-routing.module';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantRegisterComponent } from './restaurant-register/restaurant-register.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RestaurantEditComponent } from './restaurant-list/restaurant-edit/restaurant-edit.component';
import { RestaurantReviewComponent } from './restaurant-review/restaurant-review.component';
import { RouterModule } from "@angular/router";
// import { HomeComponent } from './home/home.component';
// import { ProductsComponent } from './products/products.component';
// import { ProductsInfoComponent } from './products/products-info/products-info.component';
// import { ProductsEditComponent } from './products/products-edit/products-edit.component';
// import { ProductsNewComponent } from './products/products-new/products-new.component'




@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RestaurantRegisterComponent,
    RestaurantDetailsComponent,
    RestaurantEditComponent,
    RestaurantReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
