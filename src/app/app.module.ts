
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { GlobalService } from './services/global.service';
import { ManageCsvComponent } from './shared/manage-csv/manage-csv.component';
import { FooterComponent } from './core/footer/footer.component';
import { MainNavigationComponent } from '../app/core/main-navigation/main-navigation.component';
import { HeaderComponent } from '../app/core/header/header.component';
import { NewRecordModule } from './shared/new-record/new-record.module';
import { RecordsTableModule } from './shared/records-table/records-table.module';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';
import { PieChartComponent } from './shared/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageCsvComponent,
    FooterComponent,
    MainNavigationComponent,
    HeaderComponent,
    BarChartComponent,
    PieChartComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    NewRecordModule,
    RecordsTableModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
