import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent{
 
  constructor(private global : GlobalService) {}

  public chartType:string = 'bar';
        
  public chartDatasets:Array<any> = [];

  public chartLabels:Array<any> = [];

  public chartOptions:any;

  public chartColors:Array<any> = [
      {
          backgroundColor: '#d76d77',
          borderColor: '#d76d77',
          borderWidth: 2,
          pointBackgroundColor: '#d76d77',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#d76d77'
      }
  ];

  get records()
  {
    return this.global.records;
  }
  
  /**
   * Event Subscriber
   */
  subscribe = this.global.generateGraph.subscribe((data: string) => {
   this.resetFields();
   this.getbarChartData();
  });

  /**
   * Reset Graph Fields
   */
  resetFields()
  {
    this.chartDatasets = [];
    this.chartLabels = [];
    this.chartOptions ={responsive:true};
  }
  
  /**
   * This method assign data to the chart element
   */
  getbarChartData() {
    var data = [];
    let hersteller =this.global.records.map(item => item.hersteller);
    let totalhersteller = {};
    hersteller.forEach(function(x) {
      totalhersteller[x] = (totalhersteller[x] || 0)+1; 
    });

    for (var property in totalhersteller) {
      data.push(totalhersteller[property]);
      if(property==="")
        property = "Unspecified";
      this.chartLabels.push(property);
    }
    
    this.chartDatasets.push(
      {data: data, label: 'Manufacturer'}
    );
    
  }

}
