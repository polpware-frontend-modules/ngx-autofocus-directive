import { __decorate, __metadata } from 'tslib';
import { ElementRef, Input, Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

let AutofocusDirective = class AutofocusDirective {
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
};
AutofocusDirective.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], AutofocusDirective.prototype, "autofocus", void 0);
AutofocusDirective = __decorate([
    Directive({
        selector: '[autofocus],[attr.autofocus]'
    }),
    __metadata("design:paramtypes", [ElementRef])
], AutofocusDirective);

let FtAutofocusModule = class FtAutofocusModule {
};
FtAutofocusModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
        ],
        declarations: [
            AutofocusDirective,
        ],
        exports: [
            AutofocusDirective,
        ]
    })
], FtAutofocusModule);

/*
 * Public API Surface of ngx-autofocus-directive
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AutofocusDirective, FtAutofocusModule };
//# sourceMappingURL=40three-ngx-autofocus-directive.js.map
