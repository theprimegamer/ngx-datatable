import { EventEmitter, OnInit } from '@angular/core';
import { SelectionType } from '../../types';
export declare class DataTableHeaderCellFilterComponent implements OnInit {
    column: any;
    allRowsSelected: boolean;
    selectionType: SelectionType;
    headerHeight: number;
    minFilterLength: number;
    filter: EventEmitter<any>;
    previousFilterValue: string;
    select: EventEmitter<any>;
    readonly columnCssClasses: any;
    readonly name: string;
    readonly prop: string;
    readonly minWidth: number;
    readonly maxWidth: number;
    readonly width: number;
    readonly isCheckboxable: boolean;
    ngOnInit(): void;
    inputChanged(e: any): void;
}
