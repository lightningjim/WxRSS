import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TimerObservable } from "rxjs/observable/TimerObservable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/takeWhile';


import { CurrentWxService } from '../current-wx.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
	lat: number;
  lng: number;
  current: TimerObservable<any>;
  private alive: boolean;

  //constructor(private wx: CurrentWxService) { }
  constructor(private wx: CurrentWxService) { }

  ngOnInit() {
    this.alive = true;

    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    } else {
      this.lat = 35.443140;
      this.lng = -97.596350;
    }
    this.getForecast();   
  }

  ngOnDestroy() {
    this.alive = false;
  }


  getForecast() {
    TimerObservable.create(0, 900000)
                    .takeWhile(() => this.alive)
                    .subscribe(() => {
                      this.wx.currentConditions(this.lat, this.lng)
                        .subscribe((data) => {
                          this.current = data;
                          console.log(data);
                        }
                      )
                    })
  	//this.current = this.currentPre.do(data => console.log(data));
    //this.test = this.currentPre.subscribe(data => console.log(data));
    //console.log(typeof this.test);
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
