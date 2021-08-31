import { ChartDataSets } from "chart.js";
export type chartName = '2018' | '2019' | '2020' | '' ;
export interface IEmployeeResponce {
  employeesData: number[];
  year: chartName;
}
export interface MyChartDataSets extends ChartDataSets {
  label: chartName;
}
