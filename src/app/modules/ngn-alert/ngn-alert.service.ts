import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import { NgnOptions } from './ngn-interface'

export class NgnAlertService{
    private ngnSubject = new Subject<any>();
    private options:any;
    ngnActivate(options:NgnOptions){
        console.log("options:",options);
        this.options=options;
        this.ngnSubject.next(options);
        console.log(" this.ngnSubject:",this.ngnSubject);
        
    }
    ngnDeactivate(){
        this.ngnSubject.next("deactivate");
    }
    ngnOpen(){
        this.ngnSubject.next("activate");  
    } 
    ngnClose():Observable<any>{
        return this.ngnSubject.asObservable()
    }
    ngnState():Observable<any>{
        return this.ngnSubject.asObservable()
    }
}