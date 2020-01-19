import { Component, ViewChild } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { CsvManagerService } from '../../services/csv-manager.service';

@Component({
  selector: 'app-manage-csv',
  templateUrl: './manage-csv.component.html',
  styleUrls: ['./manage-csv.component.scss']
})

export class ManageCsvComponent {

  constructor(private global : GlobalService, private csvManager: CsvManagerService) {}

  @ViewChild('csvReader', { static: true }) csvReader: any;

  get records()
  {
      return this.global.records;
  }

  /**
   * This event is triggered while uploading the file
   * 
   * @param $event 
   */
  uploadListener($event: any): void {
    let files = $event.srcElement.files;
    if (this.csvManager.isValidCSVFile(files[0])) {
      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);
      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        let headersRow = this.csvManager.getFileHeader(csvRecordsArray);
        this.global.records = this.csvManager.getRecordsFromFile(csvRecordsArray,headersRow.length);
        this.global.generateGraph.emit('fetch_graph');
       };
      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };
    } else {
      this.global.generateGraph.emit('fetch_graph');
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  }

  /**
   * This method resets file input
   */
  fileReset() {
    this.csvReader.nativeElement.value = "";
    this.global.records = [];
  }

  /**
   * This method retrieves data from Html Table
   */
  exportCSV() {
   this.csvManager.export();
  }

}
