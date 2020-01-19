import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { GlobalService } from '../../services/global.service';
import { Csv } from '../../model/csv/csv.model';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.scss']
})

export class NewRecordComponent implements OnInit {

  validatingForm: FormGroup;
  constructor(private global : GlobalService) { }

  @ViewChild(ModalDirective, { static: true }) modal: ModalDirective;

  ngOnInit() {
    this.validatingForm = new FormGroup({
      hauptartikelnr: new FormControl('', Validators.required),
      artikelname: new FormControl('', Validators.required),
      hersteller: new FormControl('', Validators.required)
    });
  }

  get records()
  {
    return this.global.records;
  }

  get hauptartikelnr() {
    return this.validatingForm.get('hauptartikelnr');
  }

  get artikelname() {
    return this.validatingForm.get('artikelname');
  }

  get hersteller() {
    return this.validatingForm.get('hersteller');
  }

  /**
   * This method adds new record in the table
   */
  addRecord() {
    let csvRecord: Csv = new Csv();
    csvRecord.hauptartikelnr = (this.hauptartikelnr).value;
    csvRecord.artikelname = (this.artikelname).value;
    csvRecord.hersteller = (this.hersteller).value;
    this.global.records.push(csvRecord);
    this.global.generateGraph.emit('fetch_graph');  
    this.closeModal();
  }

  /**
   * This method resets form
   */
  closeModal()
  {
    this.validatingForm.reset();
    this.modal.hide();
  }

}
