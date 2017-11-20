import { Component, OnInit,Input } from '@angular/core';

@Component({
	selector: 'app-ngn-alert',
	templateUrl: './ngn-alert.component.html',
	styleUrls: ['./ngn-alert.component.css']
})

export class NgnAlertComponent implements OnInit {
	@Input() options:any={};
	constructor(){
	}
	ngOnInit(){
		console.log("options:",this.options);
	}

}
