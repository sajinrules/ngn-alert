import { Component, OnInit,Input } from '@angular/core';
import { Options } from './ngn-interface'
@Component({
	selector: 'app-ngn-alert',
	templateUrl: './ngn-alert.component.html',
	styleUrls: ['./ngn-alert.component.css']
})

export class NgnAlertComponent implements OnInit {
	@Input() options:Options;
	constructor(){
	}
	ngOnInit(){
		console.log("options:",this.options);
	}

}
