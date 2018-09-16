import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/operator/do';

import { CurrentWxService } from '../current-wx.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
	lat: number;
  lng: number;
  current: Observable<any>;
  //currentSub: Subscription<any>;

  //constructor(private wx: CurrentWxService) { }
  constructor(private wx: CurrentWxService) { }

  ngOnInit() {
    this.lat = 35.443140;
    this.lng = -97.596350;
    this.getForecast();
  }


  getForecast() {
  	this.current = this.wx.currentConditions(this.lat, this.lng).do(data => console.log(data));
  }

  weatherIcon(icon) {
    switch (icon) {
      case 'clear-day':
        return 'day-sunny'
      case 'clear-night':
        return 'night-clear'
      case 'partly-cloudy-day':
        return 'day-cloudy'
      case 'partly-cloudy-night':
        return 'night-alt-cloudy'
      case 'rain':
        return 'rain'
      case 'snow':
        return 'snow'
      case 'sleet':
        return 'sleet'
      case 'wind':
        return 'strong-wind'
      case 'fog':
        return 'fog'
      case 'cloudy':
        return 'cloudy'
      case 'hail':
        return 'hail'
      case 'thunderstorm':
        return 'thunderstorm'
      case 'tornado':
        return 'tornado'
      default:
        return 'na'
    }
  }
}
