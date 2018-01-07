# NgnAlert
ngn-alert provides you an alert service to convey messages. It has a simple service that can use in your Angular 4+ applications.

## Installation

```javascript
npm install ngn-alert
```

## Configuration
---
Include ngn-alert module in your module.

```javascript
import { NgnAlertModule } from 'ngn-alert';
```
```javascript
@NgModule({
    declarations: [
    ],
    imports: [
        NgnAlertModule.forRoot(),
        BrowserModule
    ],
  bootstrap: []
})
export class ExampleModule { }
```

## Try it
---
First of import ngn-alert service in your component where you want to use to communicate with ngn-alert API.
```javascript
import { NgnAlertService } from 'ngn-alert';
```
Use it on Constructor of the required class
```javascript
constructor(private ngnAlertService:NgnAlertService){
}
```
The service provides two functions to Activate and Deactivate alert messages.
1. ***ngnActivate*** - Activate alert with options.
2. ***ngnDeactivate*** - Deactivate activated alerts.

### eg:
```javascript
export class AppComponent {
	title = 'MyApp';
	options = {
		text:"Success !",
		type:"fail",
		autoDismis:false,
		timeout:2000
	}
	constructor(private ngnAlertService:NgnAlertService){}
	activate(){
		this.ngnAlertService.ngnActivate(this.options);
	}

}
```
you can use same for ***ngnDeactivate()***
```javascript
Deactivate(){
    this.ngnAlertService.ngnDeactivate()
}

```
### options
functions            | type   | Definition
---------------------|--------| -------------
***text***           | String | The text to be displayed in the alert, eg: Success, Fail, Send etc. Make it small to contain the alert box. 
***type***           | String |The type of message. It only accepts certain string values ```success```, ```fail```, ```warning```
***autoDismis***     | Boolean | The alert should dismiss automatically or not. ```true``` or ```false```
***timeout***        | Number (in milliseconds)  | If you have set ```autoDismis=true```, then you can set time a for auto dismiss.Default is 2 seconds (2000 ms)



