import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-records-table',
  templateUrl: './records-table.component.html',
  styleUrls: ['./records-table.component.scss']
})
export class RecordsTableComponent {
  
  editField: string;
  newRecord: Array<any> = [];
  collection = { count: this.records.length, data: this.records };
  config = {
    itemsPerPage: 7,
    currentPage: 1,
    totalItems: this.collection.count
  };
 
  constructor(private global : GlobalService) {}

  get records()
  {
      return this.global.records;
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  /**
   * This method updates table cell content
   * 
   * @param id 
   * @param property 
   * @param event 
   */
  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.global.records[id][property] = editField;
    this.global.generateGraph.emit('fetch_graph');  
  }

  /**
   * This method remove a row
   * 
   * @param id 
   */
  remove(id: any) {
    this.newRecord.push(this.global.records[id]);
    this.global.records.splice(id, 1);
    this.global.generateGraph.emit('fetch_graph');  
  }

  /**
   * This method is used to change value while editing
   * 
   * @param id 
   * @param property 
   * @param event 
   */
  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

}
