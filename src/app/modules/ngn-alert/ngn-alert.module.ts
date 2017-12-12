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
    ]
})
export class NgnAlertModule { 
    static forRoot() {
        return {
            ngModule: NgnAlertModule,
            providers: [ NgnAlertService ]
        }
    }

}
export * from './ngn-alert.service';
export * from './ngn-alert.component';