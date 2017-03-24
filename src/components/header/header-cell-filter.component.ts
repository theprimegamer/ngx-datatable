import {
  Component, Input, EventEmitter, Output, HostBinding, OnInit
} from '@angular/core';

import { SortDirection, SortType, SelectionType } from '../../types';
import { nextSortDir } from '../../utils';

@Component({
  selector: 'datatable-header-cell-filter',
  template: `
    <div>
      <span
        class="datatable-header-cell-wrapper">
        <span
          class="datatable-header-cell-label">
          <input *ngIf="showFilter" class="form-control" (keyup)="inputChanged($event)" placeholder="Filter {{name}}..."/>
        </span>
      </span>
    </div>
  `,
  styles: [ `
    .form-control {
      width: 100%
    }
    ` ]
})
export class DataTableHeaderCellFilterComponent implements OnInit {

  @Input() column: any;
  @Input() allRowsSelected: boolean;
  @Input() selectionType: SelectionType;

  @HostBinding('style.height.px')
  @Input() headerHeight: number;

  @Input() minFilterLength: number;
  @Output() filter: EventEmitter<any> = new EventEmitter();
  previousFilterValue: string = '';
  @Output() select: EventEmitter<any> = new EventEmitter();

  @HostBinding('class')
  get columnCssClasses(): any {
    let cls = 'datatable-header-cell';

    if(this.column.sortable) cls += ' sortable';
    if(this.column.resizeable) cls += ' resizeable';
    if(this.column.cssClasses) cls += ' ' + this.column.cssClasses;

    return cls;
  }

  @HostBinding('attr.title')
  get name(): string {
    return this.column.name || this.column.prop;
  }

  get prop(): string {
    return this.column.prop;
  }

  get showFilter(): boolean {
    return !this.column.hideFilter;
  }

  @HostBinding('style.minWidth.px')
  get minWidth(): number {
    return this.column.minWidth;
  }

  @HostBinding('style.maxWidth.px')
  get maxWidth(): number {
    return this.column.maxWidth;
  }

  @HostBinding('style.width.px')
  get width(): number {
    return this.column.width;
  }

  get isCheckboxable(): boolean {
    return this.column.checkboxable &&
      this.column.headerCheckboxable &&
      this.selectionType === SelectionType.checkbox;
  }

  ngOnInit() {
    if (this.minFilterLength == null)
      this.minFilterLength = 3;
  }

  inputChanged(e) {
    const newValue = e.target.value;
    if ((newValue.length >= this.minFilterLength || newValue.length == 0) && this.previousFilterValue !== newValue) {
      this.previousFilterValue = newValue;
      this.filter.emit({column: this.prop, value: e.target.value});
    }
  }

}
