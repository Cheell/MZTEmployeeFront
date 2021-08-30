import { state } from '@angular/animations';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
  State
} from '@ngrx/store';
import { IEmployee } from '../model/chart.model';
import { EmployeeActions } from './action-types';


export interface ChartState {
  employeedData: IEmployee[]
}

export  const initialChartState: ChartState = {
  employeedData: []
}

export const chartReducer = createReducer(
  initialChartState,
  on(EmployeeActions.employeesFetch2018, (state, action) => {
    return {
      employeedData: action.employeeData
    }
  })
);
