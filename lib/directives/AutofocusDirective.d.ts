import { AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
export declare class AutofocusDirective implements AfterViewInit, OnDestroy {
    private _el;
    /**
     * Set to null to disable
     */
    autofocus: any;
    private _timerId;
    constructor(_el: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
