import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from "../../http.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css']
})
export class RestaurantEditComponent implements OnInit {
    title ='Edit a restaurant'
    restaurantToUpdate: Object;
    createErrors: Object;
    @Input() restaurantToEdit: any; // from parent (restaurant-list-component)

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router)  {
      console.log('RestaurantEditComponent.constructor')
  }

  ngOnInit() {
      console.log('RestaurantEditComponent.ngOnInit');
      this._route.params.subscribe((prms: Params)=>{
          let restaurantEditObservable = this._httpService.get_restaurant(prms['id']);
          restaurantEditObservable.subscribe((restaurant_edit_data)=>{
              this.restaurantToUpdate=restaurant_edit_data['data'];
              console.log(this.restaurantToUpdate);
          })
      })


  }
  edit_restaurant(){
      console.log('RestaurantEditComponent.edit_restaurant');
      let restaurantObservable = this._httpService.edit_restaurant(this.restaurantToUpdate);
      restaurantObservable.subscribe((restaurant_data: any)=>{
          if(!restaurant_data.error){
              this._router.navigate(['restaurant']);
          }
          else{
              this.createErrors=restaurant_data.error;
          }
      })

  }


}
