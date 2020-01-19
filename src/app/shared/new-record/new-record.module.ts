import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NewRecordComponent } from './new-record.component';

@NgModule({
  declarations: [
    NewRecordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule
  ],
  exports: [
    NewRecordComponent
  ]
})
export class NewRecordModule { }
