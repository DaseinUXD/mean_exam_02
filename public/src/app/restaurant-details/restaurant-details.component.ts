import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { HttpService } from "../http.service";

@Component({
    selector: 'app-restaurant-details',
    templateUrl: './restaurant-details.component.html',
    styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
    title = 'Reviews for ';
    restaurant: Object;
    createErrors: Object;


    constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {
        console.log('RestaurantDetailsComponent.constructor')
    }


    ngOnInit() {
        console.log('RestaurantDetailsComponent.ngOnInit');
        this.restaurant = {
            name: '',
            cuisine: '',
            reviews: []
        };
        this._route.params.subscribe((prms: Params) => {
            let restaurantObservable = this._httpService.get_restaurant(prms['id']);
            restaurantObservable.subscribe((restaurant_data) => {
                this.restaurant = restaurant_data['data'];
                console.log(this.restaurant);
            })
        })
    };

}
