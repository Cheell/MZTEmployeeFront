import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ChartState } from '../reducers';
import { employeesFetch2018 } from '../reducers/employee.actions';
import { EmploeeService as EmployeeService } from '../../services/emploee.service';
import { IEmployee } from '../model/chart.model';
import { ChartType, Row } from 'angular-google-charts';
import { Column } from 'angular-google-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  chartType = ChartType.Line;
  chartData: Row[] = [[1,2,3,4], [1,2,3,4], [1,2,3,4], [1,2,3,4], [1,2,3,4], [1,2,3,4], [1,2,3,4], [1,2,3,4]];
  chartOptions = { selectionMode: 'multiple',  tooltip: {trigger: 'selection'},   aggregationTarget: 'auto'} ;

  chartData$: Observable<IEmployee[]> | undefined;

  constructor(private store: Store<ChartState>, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.fetchChartData();
    this.chartData$ = this.store
      .pipe(select(
        state => state["employeedData"]
      )
    );
  }

  private fetchChartData() {
    this.employeeService.get2018data().subscribe(
      employeeData => {
        this.store.dispatch(employeesFetch2018({employeeData}));
        console.log(employeeData);
      }
    )
  }


}
