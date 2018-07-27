import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from "./restaurant-list/restaurant-list.component";
import { RestaurantDetailsComponent } from "./restaurant-details/restaurant-details.component";
import { RestaurantRegisterComponent } from "./restaurant-register/restaurant-register.component";
import { RestaurantEditComponent } from "./restaurant-list/restaurant-edit/restaurant-edit.component";

const routes: Routes = [
    {path: 'restaurant/new', component: RestaurantRegisterComponent},
    {path: 'restaurant/:id', component: RestaurantDetailsComponent},
    {
        path: 'restaurant', component: RestaurantListComponent, children: [
            // nested route
            {path: ':id/edit', component: RestaurantEditComponent},
        ]
    },
    // {path: 'restaurant/:id/edit', component: RestaurantEditComponent},

    {path: '', pathMatch: 'full', component: RestaurantListComponent}, // redirects empty url to app home
    {path: '**', redirectTo: '/'}, // redirects any mistyped url to the app home
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
