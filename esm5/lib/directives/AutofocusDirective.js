import { __decorate, __metadata } from "tslib";
import { Directive, AfterViewInit, ElementRef, Input, OnDestroy } from '@angular/core';
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
export { AutofocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0b2ZvY3VzRGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQDQwdGhyZWUvbmd4LWF1dG9mb2N1cy1kaXJlY3RpdmUvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9BdXRvZm9jdXNEaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS3ZGO0lBVUksNEJBQ1ksR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7SUFDdkIsQ0FBQztJQUVMLDRDQUFlLEdBQWY7UUFDSSxJQUFNLE1BQU0sR0FBZ0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7UUFDbkQsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7Z0JBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO2FBQ3RFO1lBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQWQsQ0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQy9EO0lBQ0wsQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN0QztJQUNMLENBQUM7O2dCQWxCZ0IsVUFBVTs7SUFMM0I7UUFEQyxLQUFLLEVBQUU7O3lEQUNPO0lBTk4sa0JBQWtCO1FBSDlCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSw4QkFBOEI7U0FDM0MsQ0FBQzt5Q0FZbUIsVUFBVTtPQVhsQixrQkFBa0IsQ0E4QjlCO0lBQUQseUJBQUM7Q0FBQSxBQTlCRCxJQThCQztTQTlCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbYXV0b2ZvY3VzXSxbYXR0ci5hdXRvZm9jdXNdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0b2ZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB0byBudWxsIHRvIGRpc2FibGVcclxuICAgICAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGF1dG9mb2N1czogYW55O1xyXG5cclxuICAgIHByaXZhdGUgX3RpbWVySWQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIGNvbnN0IGh0bWxFbDogSFRNTEVsZW1lbnQgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9mb2N1cyB8fCBodG1sRWwuaGFzQXR0cmlidXRlKCdhdXRvZm9jdXMnKSkge1xyXG4gICAgICAgICAgICBpZiAoIWh0bWxFbC5mb2N1cykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZm9jdXMgZWxlbWVudC4gZm9jdXMoKSBtZXRob2Qgbm90IGZvdW5kLmApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl90aW1lcklkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gaHRtbEVsLmZvY3VzKCksIDUwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RpbWVySWQpIHtcclxuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLl90aW1lcklkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19