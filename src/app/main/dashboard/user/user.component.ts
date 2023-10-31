import { Component, OnInit, ViewChild } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private _datatablesService: any;
  public basicSelectedOption: number = 10;
  public ColumnMode = ColumnMode;


  @ViewChild(DatatableComponent) table: DatatableComponent | any;
  @ViewChild('tableRowDetails') tableRowDetails: any;
  // private
  private tempData = [];
  private _unsubscribeAll: Subject<any>;
  rows = [];
  public tempFilterData;
  public previousStatusFilter = "";

  constructor() { }

  ngOnInit(): void {
    /*    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
         this.rows = response;
         this.tempData = this.rows;
       }); */
  }


}
