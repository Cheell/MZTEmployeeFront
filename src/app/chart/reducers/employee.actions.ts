import { createAction, props } from "@ngrx/store";
import { IEmployee } from "../model/chart.model";

export const employeesFetch2018 = createAction(
  "[Chart] Fetch Employees2018",
  props<{employeeData: IEmployee[]}>()
);

export const employeesFetch2019 = createAction(
  "[Chart] Fetch Employees2019",
  props<{employeeData: IEmployee[]}>()
);

export const employeesFetch2020 = createAction(
  "[Chart] Fetch Employees2020",
  props<{employeeData: IEmployee[]}>()
);
