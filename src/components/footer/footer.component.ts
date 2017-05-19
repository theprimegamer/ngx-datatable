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
        Showing {{firstItemNumber.toLocaleString()}} - {{lastItemNumber.toLocaleString()}} of  {{rowCount.toLocaleString()}}
      </div>
      <div class="page-size">
        <select #s (change)="selectRowCountDisplay(s.value)">
          <ng-container *ngFor="let option of rowCountOptions; let i = index">
            <option [value]="option" *ngIf="option == pageSize" selected>
              Display {{option}} Per Page
            </option>
            <option [value]="option" *ngIf="option != pageSize">
              Display {{option}} Per Page
            </option>
          </ng-container>
        </select>
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
  @Input() rowCountOptions = [10, 25, 50, 100];
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
  @Output() pageSizeSelected = new EventEmitter<number>();

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

  selectRowCountDisplay(newValue: number) {
    this.pageSize = newValue;
    this.pageSizeSelected.emit(newValue);
  }
}
