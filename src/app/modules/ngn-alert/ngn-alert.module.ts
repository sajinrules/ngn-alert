import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgnAlertComponent } from './ngn-alert.component';
@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule
    ],
    declarations: [
        NgnAlertComponent
    ],
    exports: [
        NgnAlertComponent // <-- this!
    ]
})
export class NgnAlertModule { }