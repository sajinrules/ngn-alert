import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import { NgnOptions } from './ngn-interface'
@Injectable()
export class NgnAlertService{
    private ngnSubject: Subject<any> = new Subject<any>();
    private options:any={};
    ngnActivate(options:NgnOptions){
        this.options=options;
        this.options.state='active'
        this.ngnSubject.next(options);
    }
    ngnDeactivate(){
        this.options.state='inactive'
        this.ngnSubject.next("inactive");
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


