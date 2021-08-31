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
import { IEmployeeResponce } from '../model/chart.model';
import { EmployeeActions } from '../action-types';


export interface ChartState {
  employeesResponce: IEmployeeResponce
}

export  const initialChartState: ChartState = {
  employeesResponce: { employeesData: [], year: '' }
}

export const chartReducer = createReducer(
  initialChartState,
  on(EmployeeActions.employeesFetch2018, (state, action) => {
    return {
      employeesResponce: action.employeeResponce
    }
  }),
  on(EmployeeActions.employeesFetch2019, (state, action) => {
    return {
      employeesResponce: action.employeeResponce
    }
  }),
  on(EmployeeActions.employeesFetch2020, (state, action) => {
    return {
      employeesResponce: action.employeeResponce
    }
  }),
);
