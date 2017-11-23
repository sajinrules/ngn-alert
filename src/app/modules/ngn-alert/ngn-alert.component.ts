import { Component, OnInit,Input } from '@angular/core';
import {trigger, state, style, animate, transition } from '@angular/animations';
import { NgnOptions } from './ngn-interface'
import { NgnAlertService } from './ngn-alert.service'

@Component({
	selector: 'app-ngn-alert',
	templateUrl: './ngn-alert.component.html',
	styleUrls: ['./ngn-alert.component.css'],
	animations: [
	trigger('ngnState', [
		state('inactive', style({
			opacity:0
		})),
		state('active',   style({
			opacity:1
		})),
		transition('active <=> inactive', animate('200ms ease-out'))
		])
	]
})

export class NgnAlertComponent implements OnInit {
	@Input() options:NgnOptions;
	private state = 'inactive';
	constructor(private ngnAlertService:NgnAlertService){
		console.log("constructor");
		this.ngnAlertService.ngnOpen().subscribe(message => {
			console.log("message:",message);
		});
		
	}
	ngOnInit(){
		console.log("this.state:",this.state);
		

		// setTimeout(()=> {
		// 	console.log("time out:",this.state);
		// 	this.state='inactive';
		// }, 2000);
		
	}
	toggleState() {
		this.state = this.state === 'active' ? 'inactive' : 'active';
	}
}
