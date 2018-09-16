export class Item {
	title: string;
	description: string;
	link: string;
	uuid: string;
	read: boolean;
	source: string;
	pubDate?: Date;

  constructor(item?: any) {
  	this.title = item && item.title || null;
  	this.description = item && item.description || null;
  	this.link = item && item.link || null;
  	this.uuid = item && item.uuid || this.link;
  	this.read = false;
  	this.source = item && item.source || null;
  	this.pubDate = item && item.pubDate || null;
  	}
}