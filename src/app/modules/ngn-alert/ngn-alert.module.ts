import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgnAlertComponent } from './ngn-alert.component';
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        NgnAlertComponent
    ],
    exports: [
        NgnAlertComponent // <-- this!
    ]
})
export class NgnAlertModule { }