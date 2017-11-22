import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import { NgnOptions } from './ngn-interface'

export class NgnAlertService{
    private ngnSubject = new Subject<any>();
    ngnActivate(option:NgnOptions){
        this.ngnSubject.next(option);
        return this.ngnSubject.asObservable();
    }
    ngnDeactivate(){
        this.ngnSubject.next();
        return this.ngnSubject.asObservable();
    } 
}