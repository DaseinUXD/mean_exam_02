import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
    selector: 'app-restaurant-list',
    templateUrl: './restaurant-list.component.html',
    styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
    restaurants: Object[];
    selectedRestaurant: Object;

    constructor(private _httpService: HttpService) {
        console.log('RestaurantListComponent.constructor');
    }

    ngOnInit() {
        console.log('RestaurantListComponent.ngOnInit')

        // initialize class atributes when Angular initializes this component
        this.restaurants = [];
        this.selectedRestaurant = {};

        // create observable and subscribe ($.get('/restaurants', function(restaurants_data) { ... })) in JQuery
        let restaurantObservable = this._httpService.get_restaurants();
        restaurantObservable.subscribe((restaurants_data) => {
            this.restaurants = restaurants_data['data'];
        });

    }
    // this method will be called when the 'Update' button is clicked
    selectRestaurant(restaurant: any) {
        console.log('RestaurantListComponent.selectRestaurant.restaurant:', restaurant);
        this.selectedRestaurant = restaurant;
    }

}
