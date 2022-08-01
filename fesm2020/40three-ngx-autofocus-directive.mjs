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
}
AutofocusDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AutofocusDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
AutofocusDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: AutofocusDirective, selector: "[autofocus],[attr.autofocus]", inputs: { autofocus: "autofocus" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AutofocusDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[autofocus],[attr.autofocus]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { autofocus: [{
                type: Input
            }] } });

class FtAutofocusModule {
}
FtAutofocusModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FtAutofocusModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FtAutofocusModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FtAutofocusModule, declarations: [AutofocusDirective], imports: [CommonModule], exports: [AutofocusDirective] });
FtAutofocusModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FtAutofocusModule, imports: [[
            CommonModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FtAutofocusModule, decorators: [{
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
        }] });

/*
 * Public API Surface of ngx-autofocus-directive
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AutofocusDirective, FtAutofocusModule };
//# sourceMappingURL=40three-ngx-autofocus-directive.mjs.map
