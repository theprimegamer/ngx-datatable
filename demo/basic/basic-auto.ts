import { Component } from '@angular/core';

@Component({
  selector: 'basic-auto-demo',
  template: `
    <div>
      <h3>Fluid Row Heights</h3>
      <ngx-datatable
        class="material"
        [rows]="rows"
        [loadingIndicator]="loadingIndicator"
        [columns]="columns"
        [columnMode]="'force'"
        [headerHeight]="100"
        [footerHeight]="50"
        [rowHeight]="'auto'"
        [minFilterLength]="5"
        (pageSizeSelected)="onPageSizeSelect($event)">
      </ngx-datatable>
    </div>

    <!--div role="table">
      <div role="row">
        <div role="columnheader">Name</div>
        <div role="columnheader">State</div>
      </div>
      <div role="row">
        <div role="cell">Frank</div>
        <div role="cell">Maine</div>
      </div>
      <div role="row">
        <div role="cell">Tom</div>
        <div role="cell">Colorado</div>
      </div>
      <div role="row">
        <div role="cell">John</div>
        <div role="cell">Virginia</div>
      </div>
    </div-->
  `
})
export class BasicAutoComponent {

  rows = [];
  loadingIndicator: boolean = true;

  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  constructor() {
    this.fetch((data) => {
      this.rows = data;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  onPageSizeSelect(e: any) {
    alert(e);
  }

}
