import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { RecordsTableComponent } from './records-table.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    RecordsTableComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    MDBBootstrapModule
  ],
  exports: [
    RecordsTableComponent
  ]
})
export class RecordsTableModule { }
