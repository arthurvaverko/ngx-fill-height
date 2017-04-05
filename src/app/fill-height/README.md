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

Optionally add consider footer element by passing the elementRef of the footer
	<div fill-height [footerElement]="footerRef">
        content goes here
    </div>
	<div #footerRef>footer</div>

Live demo: [https://arthurvaverko.github.io/ngx-fill-height/](https://arthurvaverko.github.io/ngx-fill-height/)

Contribution
----
Frok and clone then run
	
	npm install

This repo is based on Angular-cli.
To run a live development srver run
	
	ng serve

Note the demo is part of the repo and the dist folder is used for the example page so before commit use

	ng build --base-href ngx-fill-height

Commit to the Github-Pages branch any chages in the example component:
	
	git subtree push --prefix dist origin gh-pages


* Inspierd by: [https://github.com/anthonychu/angular-fill-height-directive](https://github.com/anthonychu/angular-fill-height-directive)