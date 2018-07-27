import { Component, OnInit  } from '@angular/core';
import {HttpService} from "./http.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Let\'s Eat';
  constructor(private _httpService: HttpService){}

}
