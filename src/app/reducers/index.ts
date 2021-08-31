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
import { ChartState } from '../chart/reducers';


export interface AppState {
  chart: ChartState;
}

export  const reducers: ActionReducerMap<AppState> = { } as ActionReducerMap<AppState>

export const metaReducers:  MetaReducer<AppState>[] = []
