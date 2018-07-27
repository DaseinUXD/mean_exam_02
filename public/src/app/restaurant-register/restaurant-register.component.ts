import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-restaurant-register',
    templateUrl: './restaurant-register.component.html',
    styleUrls: ['./restaurant-register.component.css']
})
export class RestaurantRegisterComponent implements OnInit {
    title = 'Register a restaurant';
    newRestaurant: Object;
    createErrors: Object;

    constructor(private _httpservice: HttpService, private _router: Router) {
        console.log('RestaurantRegisterComponent.constructor')
    }

    ngOnInit() {
        this.newRestaurant = {};
    }

    register_restaurant() {
        console.log('RestaurantRegisterComponent.register_restaurant');
        let registerObservable = this._httpservice.create_restaurant(this.newRestaurant);
        registerObservable.subscribe((data_from_register: any) => {
            console.log('data_from_register', data_from_register);
            if (!data_from_register.error) {
                this._router.navigate(['restaurant']);
            }
            else {
                this.createErrors = data_from_register.error
            }
        })


    }


}
