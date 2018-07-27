import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }

  get_restaurants() {
    return this._http.get('/restaurants');
  }

  get_restaurant(id) {
    return this._http.get(`/restaurants/${id}`)
  }

  create_restaurant(restaurant: Object) {
    return this._http.post('/restaurants', restaurant)
  }

  edit_restaurant(restaurantEdit: Object){
      return this._http.patch('/restaurants', restaurantEdit)
  }
}
