import { Component, OnInit,Input } from '@angular/core';
import {trigger, state, style, animate, transition } from '@angular/animations';
import { NgnOptions } from './ngn-interface'
import { NgnAlertService } from './ngn-alert.service'

@Component({
	selector: 'ngn-alert',
	templateUrl: './ngn-alert.component.html',
	styleUrls: ['./ngn-alert.component.css'],
	animations: [
	trigger('ngnState', [
		state('inactive', style({
			display:'none',
			opacity:0
		})),
		state('active',   style({
			display:'block',
			opacity:1
		})),
		transition('active <=> inactive', animate('200ms ease-out'))
		])
	]
})

export class NgnAlertComponent implements OnInit {
	@Input() options:NgnOptions;
	private state = 'inactive';
	constructor(private ngnAlertService:NgnAlertService){}

	ngOnInit(){
		console.log("this.state:",this.state);
		this.ngnAlertService.ngnState().subscribe(message => {
			console.log("message:",message);
			this.options=message;
			this.setState(this.options.state)
			if(this.options.autoDismis && this.options.type!=='loading'){
				setTimeout(()=>{
					//this.setState('inactive')
				},this.options.timeout);
			}
		});		
	}
	setState(state){
		this.state=state;
	}
}
