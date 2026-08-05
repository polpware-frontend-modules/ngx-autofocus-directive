import * as i0 from '@angular/core';
import { Directive, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class AutofocusDirective {
    constructor(_el) {
        this._el = _el;
    }
    ngAfterViewInit() {
        const htmlEl = this._el.nativeElement;
        if (this.autofocus || htmlEl.hasAttribute('autofocus')) {
            if (!htmlEl.focus) {
                throw new Error(`Cannot focus element. focus() method not found.`);
            }
            this._timerId = window.setTimeout(() => htmlEl.focus(), 50);
        }
    }
    ngOnDestroy() {
        if (this._timerId) {
            window.clearTimeout(this._timerId);
        }
    }
    static { this.ɵfac = function AutofocusDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AutofocusDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AutofocusDirective, selectors: [["", "autofocus", ""], ["", "attr.autofocus", ""]], inputs: { autofocus: "autofocus" }, standalone: false }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AutofocusDirective, [{
        type: Directive,
        args: [{
                selector: '[autofocus],[attr.autofocus]',
                standalone: false
            }]
    }], () => [{ type: i0.ElementRef }], { autofocus: [{
            type: Input
        }] }); })();

class FtAutofocusModule {
    static { this.ɵfac = function FtAutofocusModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FtAutofocusModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FtAutofocusModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FtAutofocusModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    AutofocusDirective,
                ],
                exports: [
                    AutofocusDirective,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FtAutofocusModule, { declarations: [AutofocusDirective], imports: [CommonModule], exports: [AutofocusDirective] }); })();

/*
 * Public API Surface of ngx-autofocus-directive
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AutofocusDirective, FtAutofocusModule };
//# sourceMappingURL=40three-ngx-autofocus-directive.mjs.map
