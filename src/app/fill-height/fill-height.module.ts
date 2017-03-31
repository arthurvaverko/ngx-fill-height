import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillHeightDirective } from './fill-height.directive';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [FillHeightDirective],
	exports: [FillHeightDirective]
})
export class FillHeightModule { }
