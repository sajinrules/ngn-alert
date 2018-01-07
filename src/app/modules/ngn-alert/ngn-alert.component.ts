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
			opacity:0.7
		})),
		transition('active <=> inactive', animate('300ms')),
		])
	]
})

export class NgnAlertComponent implements OnInit {
	@Input() options:NgnOptions;
	private state = 'inactive';
	constructor(private ngnAlertService:NgnAlertService){}

	ngOnInit(){
		this.ngnAlertService.ngnState().subscribe(message => {
			this.options=message;
			this.setState(this.options.state)
			if(this.options.autoDismis && this.options.timeout){
				setTimeout(()=>{
					this.setState('inactive')
				},this.options.timeout);
			}else if(this.options.autoDismis!==false){
				setTimeout(()=>{
					this.setState('inactive')
				},2000);
			}
		});		
	}
	setState(state){
		this.state=state;
	}
	ngnClose(){
		this.ngnAlertService.ngnDeactivate()
	}
}
