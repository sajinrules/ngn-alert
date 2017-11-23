import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgnAlertComponent } from './ngn-alert.component';
import { NgnAlertService } from './ngn-alert.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule
    ],
    declarations: [
        NgnAlertComponent
    ],
    exports: [
        NgnAlertComponent 
    ],
    providers: [
        NgnAlertService
    ],
})
export class NgnAlertModule { }
export * from './ngn-alert.service';