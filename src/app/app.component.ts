import { Component } from '@angular/core';
import { Item } from './item.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	testSPCItems: Item[];

	constructor(){
		this.testSPCItems = [
			new Item({
				title: "Test 1", 
				description: "This is a test", 
				link: "http://nothere.com", 
				source: "SPC", 
				pubDate: new Date('May 24, 2018 15:34:00')
			}),
			new Item({
				title: "Test 2", 
				description: "This is also a test", 
				link: "http://anywhere.com", 
				source: "SPC"
			})
		]
		//console.log(this.testSPCItems);
	}
}
