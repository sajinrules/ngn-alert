import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgnAlertModule } from './modules/ngn-alert/ngn-alert.module';
import { NgnAlertComponent } from './modules/ngn-alert/ngn-alert.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgnAlertModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
