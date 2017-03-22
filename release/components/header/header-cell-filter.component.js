"use strict";
var core_1 = require('@angular/core');
var types_1 = require('../../types');
var DataTableHeaderCellFilterComponent = (function () {
    function DataTableHeaderCellFilterComponent() {
        this.filter = new core_1.EventEmitter();
        this.previousFilterValue = '';
        this.select = new core_1.EventEmitter();
    }
    Object.defineProperty(DataTableHeaderCellFilterComponent.prototype, "columnCssClasses", {
        get: function () {
            var cls = 'datatable-header-cell';
            if (this.column.sortable)
                cls += ' sortable';
            if (this.column.resizeable)
                cls += ' resizeable';
            if (this.column.cssClasses)
                cls += ' ' + this.column.cssClasses;
            return cls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellFilterComponent.prototype, "name", {
        get: function () {
            return this.column.name || this.column.prop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellFilterComponent.prototype, "prop", {
        get: function () {
            return this.column.prop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellFilterComponent.prototype, "minWidth", {
        get: function () {
            return this.column.minWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellFilterComponent.prototype, "maxWidth", {
        get: function () {
            return this.column.maxWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellFilterComponent.prototype, "width", {
        get: function () {
            return this.column.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderCellFilterComponent.prototype, "isCheckboxable", {
        get: function () {
            return this.column.checkboxable &&
                this.column.headerCheckboxable &&
                this.selectionType === types_1.SelectionType.checkbox;
        },
        enumerable: true,
        configurable: true
    });
    DataTableHeaderCellFilterComponent.prototype.ngOnInit = function () {
        if (this.minFilterLength == null)
            this.minFilterLength = 3;
    };
    DataTableHeaderCellFilterComponent.prototype.inputChanged = function (e) {
        var newValue = e.target.value;
        if ((newValue.length >= this.minFilterLength || newValue.length == 0) && this.previousFilterValue !== newValue) {
            this.previousFilterValue = newValue;
            this.filter.emit({ column: this.prop, value: e.target.value });
        }
    };
    DataTableHeaderCellFilterComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'datatable-header-cell-filter',
                    template: "\n    <div>\n      <span\n        *ngIf=\"!column.headerTemplate\"\n        class=\"datatable-header-cell-wrapper\">\n        <span\n          class=\"datatable-header-cell-label\">\n          <input class=\"form-control\" (keyup)=\"inputChanged($event)\" placeholder=\"Filter {{name}}...\"/>\n        </span>\n      </span>\n    </div>\n  ",
                    styles: ["\n    .form-control {\n      width: 100%\n    }\n    "]
                },] },
    ];
    /** @nocollapse */
    DataTableHeaderCellFilterComponent.ctorParameters = function () { return []; };
    DataTableHeaderCellFilterComponent.propDecorators = {
        'column': [{ type: core_1.Input },],
        'allRowsSelected': [{ type: core_1.Input },],
        'selectionType': [{ type: core_1.Input },],
        'headerHeight': [{ type: core_1.HostBinding, args: ['style.height.px',] }, { type: core_1.Input },],
        'minFilterLength': [{ type: core_1.Input },],
        'filter': [{ type: core_1.Output },],
        'select': [{ type: core_1.Output },],
        'columnCssClasses': [{ type: core_1.HostBinding, args: ['class',] },],
        'name': [{ type: core_1.HostBinding, args: ['attr.title',] },],
        'minWidth': [{ type: core_1.HostBinding, args: ['style.minWidth.px',] },],
        'maxWidth': [{ type: core_1.HostBinding, args: ['style.maxWidth.px',] },],
        'width': [{ type: core_1.HostBinding, args: ['style.width.px',] },],
    };
    return DataTableHeaderCellFilterComponent;
}());
exports.DataTableHeaderCellFilterComponent = DataTableHeaderCellFilterComponent;
//# sourceMappingURL=header-cell-filter.component.js.map