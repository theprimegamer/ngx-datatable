import {
  Component, Output, EventEmitter, ChangeDetectionStrategy, Input
} from '@angular/core';

@Component({
  selector: 'datatable-footer',
  template: `
    <div
      [ngClass]="{'selected-count': selectedMessage}"
      [style.height.px]="footerHeight">
      <div class="page-count">
        <span *ngIf="selectedMessage">
          {{selectedCount.toLocaleString()}} {{selectedMessage}} / 
        </span>

        Showing {{firstItemNumber.toLocaleString()}} - {{lastItemNumber.toLocaleString()}} of  {{rowCount.toLocaleString()}}
      </div>
      <datatable-pager
        [pagerLeftArrowIcon]="pagerLeftArrowIcon"
        [pagerRightArrowIcon]="pagerRightArrowIcon"
        [pagerPreviousIcon]="pagerPreviousIcon"
        [pagerNextIcon]="pagerNextIcon"
        [page]="curPage"
        [size]="pageSize"
        [count]="rowCount"
        [hidden]="!isVisible"
        (change)="page.emit($event)">
      </datatable-pager>
    </div>
  `,
  host: {
    class: 'datatable-footer'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableFooterComponent {

  @Input() footerHeight: number;
  @Input() rowCount: number;
  @Input() pageSize: number;
  @Input() offset: number;
  @Input() pagerLeftArrowIcon: string;
  @Input() pagerRightArrowIcon: string;
  @Input() pagerPreviousIcon: string;
  @Input() pagerNextIcon: string;
  @Input() totalMessage: string;

  @Input() selectedCount: number = 0;
  @Input() selectedMessage: string | boolean;

  @Output() page: EventEmitter<any> = new EventEmitter();

  get isVisible(): boolean {
    return (this.rowCount / this.pageSize) > 1;
  }

  get curPage(): number {
    return this.offset + 1;
  }

  get firstItemNumber(): number {
    return this.offset * this.pageSize + 1;
  }

  get lastItemNumber(): number {
    return Math.min(this.curPage * this.pageSize, this.rowCount);
  }
}
