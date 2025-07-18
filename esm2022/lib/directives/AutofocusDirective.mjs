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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AutofocusDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: AutofocusDirective, selector: "[autofocus],[attr.autofocus]", inputs: { autofocus: "autofocus" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AutofocusDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[autofocus],[attr.autofocus]'
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { autofocus: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0b2ZvY3VzRGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1dG9mb2N1cy1kaXJlY3RpdmUvc3JjL2xpYi9kaXJlY3RpdmVzL0F1dG9mb2N1c0RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUE2QixLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7O0FBS3ZGLE1BQU0sT0FBTyxrQkFBa0I7SUFVM0IsWUFDWSxHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtJQUN2QixDQUFDO0lBRUwsZUFBZTtRQUNYLE1BQU0sTUFBTSxHQUFnQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUNuRCxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO1lBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQztZQUN2RSxDQUFDO1lBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoRSxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QyxDQUFDO0lBQ0wsQ0FBQzsrR0E3QlEsa0JBQWtCO21HQUFsQixrQkFBa0I7OzRGQUFsQixrQkFBa0I7a0JBSDlCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLDhCQUE4QjtpQkFDM0M7K0VBT0csU0FBUztzQkFEUixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2F1dG9mb2N1c10sW2F0dHIuYXV0b2ZvY3VzXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dG9mb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdG8gbnVsbCB0byBkaXNhYmxlXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBhdXRvZm9jdXM6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIF90aW1lcklkOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBjb25zdCBodG1sRWw6IEhUTUxFbGVtZW50ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBpZiAodGhpcy5hdXRvZm9jdXMgfHwgaHRtbEVsLmhhc0F0dHJpYnV0ZSgnYXV0b2ZvY3VzJykpIHtcclxuICAgICAgICAgICAgaWYgKCFodG1sRWwuZm9jdXMpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGZvY3VzIGVsZW1lbnQuIGZvY3VzKCkgbWV0aG9kIG5vdCBmb3VuZC5gKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fdGltZXJJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGh0bWxFbC5mb2N1cygpLCA1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl90aW1lcklkKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fdGltZXJJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==