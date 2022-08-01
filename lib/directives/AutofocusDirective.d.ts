import { AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<AutofocusDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AutofocusDirective, "[autofocus],[attr.autofocus]", never, { "autofocus": "autofocus"; }, {}, never>;
}
