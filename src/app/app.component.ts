import { Component } from '@angular/core';
import { NgnAlertService } from './modules/ngn-alert/ngn-alert.module';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	options = {
		text:"Success !",
		type:"fail",
		autoDismis:false,
		timeout:2000
	}
	constructor(private ngnAlertService:NgnAlertService){
		
	}
	onclick(){
		this.ngnAlertService.ngnActivate(this.options);
	}

}
