import { Injectable } from '@angular/core';
import { Csv } from '../model/csv/csv.model';
import { GlobalService } from './global.service';
import { BreadcrumbModule } from 'angular-bootstrap-md';

@Injectable({
  providedIn: 'root'
})
export class CsvManagerService {
  constructor(private global:GlobalService){}

  /**
   * This method fetches data from file
   * 
   * @param csvRecordsArray 
   * @param headerLength 
   */
  getRecordsFromFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];
    for (let i = 1; i < csvRecordsArray.length; i++) {
      let currentRecord = (<string>csvRecordsArray[i]).split(';');
      if (currentRecord.length == headerLength) {
        let csvRecord: Csv = new Csv();
        csvRecord.hauptartikelnr = this.replaceCommas(currentRecord[0]);
        csvRecord.artikelname = this.replaceCommas(currentRecord[1]);
        csvRecord.hersteller = this.replaceCommas(currentRecord[2]);
        csvRecord.beschreibung = this.replaceCommas(currentRecord[3]);
        csvRecord.materialangaben = this.replaceCommas(currentRecord[4]);
        csvRecord.geschlecht = this.replaceCommas(currentRecord[5]);
        csvRecord.produktart = this.replaceCommas(currentRecord[6]);
        csvRecord.aermel = this.replaceCommas(currentRecord[7]);
        csvRecord.bein = this.replaceCommas(currentRecord[8]);
        csvRecord.kragen = this.replaceCommas(currentRecord[9]);
        csvRecord.herstellung = this.replaceCommas(currentRecord[10]);
        csvRecord.taschenart = this.replaceCommas(currentRecord[11]);
        csvRecord.grammatur = this.replaceCommas(currentRecord[12]);
        csvRecord.material = this.replaceCommas(currentRecord[13]);
        csvRecord.ursprungsland = this.replaceCommas(currentRecord[14]);
        csvRecord.bildname = this.replaceCommas(currentRecord[15]);
        csvArr.push(csvRecord);      
      }
    }
    return csvArr;
  }

  /**
   * This method removes unneccessary commas
   * 
   * @param string 
   */
  replaceCommas(string)
  {
    return string.replace(/^"(.*)"$/, '$1');
  }
  /**
   * This method checks file extension
   * 
   * @param file 
   */
  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  /**
   * This method extracts header row of file
   * 
   * @param csvRecordsArr 
   */
  getFileHeader(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(';');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  /**
   * This method fetches data from table for download
   */
  export() {
    var csv = [];
    var header = [
      'Hauptartikelnr','Artikelname','Hersteller',
      'Beschreibung','Materialangaben','Geschlecht',
      'Produktart','Ärmel','Bein','Kragen','Herstellung',
      'Taschenart','Grammatur','Material','Ursprungsland','Bildname'];
    
    csv.push(header.join(";"));

    /** Csv element */
    this.global.records.forEach(element => {
      var row = [];
      for (var property in element) {
        row.push(element[property]);
      }
      csv.push(row.join(";"));
    });
    
    this.download(csv.join("\n"));
  }
  
  /**
   * Download .csv file
   * 
   * @param csv 
   */
  download(csv:any) {
    var filename = "records.csv";
    let csvFile = new Blob([csv], {type: "text/csv"});
    let downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }

}
