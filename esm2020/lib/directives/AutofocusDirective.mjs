import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class AutofocusDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0b2ZvY3VzRGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1dG9mb2N1cy1kaXJlY3RpdmUvc3JjL2xpYi9kaXJlY3RpdmVzL0F1dG9mb2N1c0RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUE2QixLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7O0FBS3ZGLE1BQU0sT0FBTyxrQkFBa0I7SUFVM0IsWUFDWSxHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtJQUN2QixDQUFDO0lBRUwsZUFBZTtRQUNYLE1BQU0sTUFBTSxHQUFnQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUNuRCxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtnQkFDZixNQUFNLElBQUksS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7YUFDdEU7WUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQy9EO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN0QztJQUNMLENBQUM7O2dIQTdCUSxrQkFBa0I7b0dBQWxCLGtCQUFrQjs0RkFBbEIsa0JBQWtCO2tCQUg5QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSw4QkFBOEI7aUJBQzNDO2lHQU9HLFNBQVM7c0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1thdXRvZm9jdXNdLFthdHRyLmF1dG9mb2N1c10nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRvZm9jdXNEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRvIG51bGwgdG8gZGlzYWJsZVxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgYXV0b2ZvY3VzOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBfdGltZXJJZDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgY29uc3QgaHRtbEVsOiBIVE1MRWxlbWVudCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b2ZvY3VzIHx8IGh0bWxFbC5oYXNBdHRyaWJ1dGUoJ2F1dG9mb2N1cycpKSB7XHJcbiAgICAgICAgICAgIGlmICghaHRtbEVsLmZvY3VzKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBmb2N1cyBlbGVtZW50LiBmb2N1cygpIG1ldGhvZCBub3QgZm91bmQuYCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3RpbWVySWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBodG1sRWwuZm9jdXMoKSwgNTApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fdGltZXJJZCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVySWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=