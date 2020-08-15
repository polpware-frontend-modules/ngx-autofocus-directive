import { __decorate, __metadata } from 'tslib';
import { ElementRef, Input, Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var AutofocusDirective = /** @class */ (function () {
    function AutofocusDirective(_el) {
        this._el = _el;
    }
    AutofocusDirective.prototype.ngAfterViewInit = function () {
        var htmlEl = this._el.nativeElement;
        if (this.autofocus || htmlEl.hasAttribute('autofocus')) {
            if (!htmlEl.focus) {
                throw new Error("Cannot focus element. focus() method not found.");
            }
            this._timerId = window.setTimeout(function () { return htmlEl.focus(); }, 50);
        }
    };
    AutofocusDirective.prototype.ngOnDestroy = function () {
        if (this._timerId) {
            window.clearTimeout(this._timerId);
        }
    };
    AutofocusDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return AutofocusDirective;
}());

var FtAutofocusModule = /** @class */ (function () {
    function FtAutofocusModule() {
    }
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
    return FtAutofocusModule;
}());

/*
 * Public API Surface of ngx-autofocus-directive
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AutofocusDirective, FtAutofocusModule };
//# sourceMappingURL=40three-ngx-autofocus-directive.js.map
