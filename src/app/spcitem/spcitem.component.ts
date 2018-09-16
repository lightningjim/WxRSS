import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-spcitem',
  templateUrl: './spcitem.component.html',
  styleUrls: ['./spcitem.component.scss']
})
export class SPCItemComponent implements OnInit, Item {
	title: string;
	description: string;
	link: string;
	uuid: string;
	read: boolean;
	source: string;

	subsource: string;
	pubDate: string;
	category: string;
	subcategory: string;

  // constructor(obj?: any) { 
  // 	this.title = obj && obj.title || null;
  // 	this.description = obj && obj.description || null;
  // 	this.link = obj && obj.link || null;
  // 	this.uuid = obj && obj.uuid || this.link;
  // 	this.read = false;
  // 	this.source = "SPC";
  // }

  ngOnInit() {
  }

}
