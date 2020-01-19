import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {

  constructor(private global : GlobalService) {}

  public chartType:string = 'pie';

  public chartData:Array<any> = [];

  public chartLabels:Array<any> = [];

  public chartColors:Array<any> = [{
      hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'], 
      hoverBorderWidth: 0, 
      backgroundColor: ["#3a1c71" , "#d76d77" , " #ffaf7b", "#949FB1", "#4D5360"], 
      hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5","#616774"]
  }];

  public chartOptions:any = { 
      responsive: true
  };

  get records()
  {
    return this.global.records;
  }

  /**
   * Event Subscriber 
   */
  subscribe = this.global.generateGraph.subscribe((data: string) => {
    this.resetFields();
    this.getPieChartData();
  });

  /**
   * Reset Graph Values
   */
  resetFields()
  {
    this.chartData = [];
    this.chartLabels = [];
    this.chartOptions ={responsive:true};
  }

  /**
   * This method assign data to the chart element
   */
  getPieChartData()
  {
    let geschlecht =this.global.records.map(item => item.geschlecht);
    let totalgeschlecht = {};
    geschlecht.forEach(function(x) {
      totalgeschlecht[x] = (totalgeschlecht[x] || 0)+1; 
    });

    for (var property in totalgeschlecht) {
      this.chartData.push(totalgeschlecht[property]);
      if(property==="")
        property = "Unspecified";
      this.chartLabels.push(property);
    }

  }
}
