Angular fill-height directive
====

Angular directive to change the height of a div to fill the available space in the window and make is scrollable.

Usage
----
Run

	npm install ngx-fill-height

Import `FillHeightModule` to your app.

Example
	
	...
	import { FillHeightModule } from 'ngx-fill-height/fill-height.module';

	@NgModule({
		declarations: [
			AppComponent,
		],
		imports: [
			BrowserModule,
			FormsModule,
			HttpModule,
			FillHeightModule,
		],
		providers: [],
		bootstrap: [AppComponent]
	})
	export class AppModule { }


Add `fill-height` directive to any block element.

Example


    <div fill-height>
        content goes here
    </div>


Live demo: [https://arthurvaverko.github.io/ngx-fill-height/](https://arthurvaverko.github.io/ngx-fill-height/)

* Inspierd by: [https://github.com/anthonychu/angular-fill-height-directive](https://github.com/anthonychu/angular-fill-height-directive)