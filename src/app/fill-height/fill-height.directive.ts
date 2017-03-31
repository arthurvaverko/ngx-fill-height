import { HostListener, Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
@Directive({ selector: '[fill-height]' })

export class FillHeightDirective implements AfterViewInit {

	constructor(private el: ElementRef) {
	}

	ngAfterViewInit(): void {
		this.calculateAndSetElementHeight();
	}

	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.calculateAndSetElementHeight();
	}

	private calculateAndSetElementHeight() {
		this.el.nativeElement.style.overflow = 'auto';
		const windowHeight = window.innerHeight;
		const elementOffsetTop = this.el.nativeElement.offsetTop;
		const elementMarginBottom = this.el.nativeElement.style.marginBottom;
		this.el.nativeElement.style.height = windowHeight - elementOffsetTop + 'px';
		console.log('Fill-Height.Directive (Recalculatating height):', {
			windowHeight,
			elementOffsetTop,
			elementMarginBottom,
			finalHeihgt: windowHeight - elementOffsetTop,
		});
	}


}