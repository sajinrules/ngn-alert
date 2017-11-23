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
		type:"loading"
	}
	constructor(private ngnAlertService:NgnAlertService){
		this.ngnAlertService.ngnOpen().subscribe((data)=>{
			console.log("data:",data);
		})
	}

}
