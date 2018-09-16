import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
//import 'rxjs/add/operator/interval';

@Injectable({
  providedIn: 'root'
})
export class CurrentWxService {

	private wxObservable: Observable<any>;
	//private wxSubject: Subject;

	readonly ROOT_URL = "https://us-central1-current-conditions-6edd7.cloudfunctions.net/darkSkyProxy";
	constructor(private http: HttpClient) { 
		//this.wxObserver = new Observer;
	}

	currentConditions(lat: number, lng: number): Observable<any>{
		let params = new HttpParams()
		params = params.set('lat', lat.toString())
		params = params.set('lng', lng.toString())

		//return this.http.get(this.ROOT_URL, { params });

		 this.wxObservable = this.http.get(this.ROOT_URL, { params });
		 //.interval(900000).startWith(0);
		 console.log(this.wxObservable);
		 //console.log(this.wxObservable.flatmap(function(wx){return wx.currently.temperature;}));
		 return this.wxObservable;
		// this.wxObservable.subscribe(result => this.wxSubject.next(result), err => this.wxSubject.error(err))

		// return this.wxSubject.asObservable();
	}
}
