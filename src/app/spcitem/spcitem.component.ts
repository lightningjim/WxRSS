import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-spcitem',
  templateUrl: './spcitem.component.html',
  styleUrls: ['./spcitem.component.scss']
})
export class SPCItemComponent implements OnInit  {
	@Input() SPCItem: Item;
  category: string;

  constructor() {}

  ngOnInit() {
  }

}
