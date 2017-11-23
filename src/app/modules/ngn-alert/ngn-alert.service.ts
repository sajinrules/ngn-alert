import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import { NgnOptions } from './ngn-interface'

export class NgnAlertService{
    private ngnSubject = new Subject<any>();
    private options:any;
    ngnActivate(options:NgnOptions){
        this.options=options;
        this.ngnSubject.next(options);
        
    }
    ngnDeactivate(){
        this.ngnSubject.next("deactivate");
        this.ngnClose();   
    }
    ngnOpen():Observable<any>{
        console.log("open");
        this.ngnSubject.next("activate");
        return this.ngnSubject.asObservable();
    } 
    ngnClose(){
        return this.ngnSubject.asObservable()
    }
}