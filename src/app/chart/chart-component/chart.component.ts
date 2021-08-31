import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { employeesFetch2018, employeesFetch2019, employeesFetch2020 } from '../chart.actions';
import { EmployeeService } from '../../services/emploee.service';
import { chartName, MyChartDataSets } from '../model/chart.model';
import { Label } from 'ng2-charts';
import * as chartJs from 'chart.js';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor(private store: Store<AppState>, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.fetchChartData();
    this.store.pipe(select( state => state.chart.employeesResponce ))
    .subscribe(
      data => this.loadChart(data.employeesData, data.year)
    );
  }

  private fetchChartData() {
    this.employeeService.get2018data().subscribe(
      employeeResponce => {
        console.log(employeeResponce, 'employeeResponce')
        this.store.dispatch(employeesFetch2018({employeeResponce: employeeResponce}));
      }
    );
    this.employeeService.get2019data().subscribe(
      employeeResponce => {
        this.store.dispatch(employeesFetch2019({employeeResponce: employeeResponce}));
      }
    );
    this.employeeService.get2020data().subscribe(
      employeeResponce => {
        this.store.dispatch(employeesFetch2020({employeeResponce: employeeResponce}));
      }
    );
  };

  private loadChart(chartData: number[], chartName: chartName) {
    if (!chartData || chartData.length == 0 || !chartName) {
      return;
    }
    let chartLine = this.lineChartData.find(el => el.label === chartName);
    const tempChartLine: MyChartDataSets =  {data: chartData, label: chartName};
    if(!chartLine)
    {
      this.lineChartData = [...this.lineChartData,   tempChartLine];
    } else {
      chartLine = tempChartLine;
    }
  }

  //Chart configuration//
  public width: number = 0;
  public height: number = 0;
  public lineChartData: MyChartDataSets[] = [];
  public readonly lineChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public readonly lineChartLegend = true;
  public readonly lineChartType: chartJs.ChartType = 'line';

}
