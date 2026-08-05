import * as i0 from '@angular/core';
import { AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import * as i2 from '@angular/common';

declare class AutofocusDirective implements AfterViewInit, OnDestroy {
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
    static ɵdir: i0.ɵɵDirectiveDeclaration<AutofocusDirective, "[autofocus],[attr.autofocus]", never, { "autofocus": { "alias": "autofocus"; "required": false; }; }, {}, never, never, false, never>;
}

declare class FtAutofocusModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FtAutofocusModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FtAutofocusModule, [typeof AutofocusDirective], [typeof i2.CommonModule], [typeof AutofocusDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FtAutofocusModule>;
}

export { AutofocusDirective, FtAutofocusModule };
//# sourceMappingURL=40three-ngx-autofocus-directive.d.ts.map
