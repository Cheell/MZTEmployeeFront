import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { ChartComponent } from '../chart/chart-component/chart.component';
import { chartReducer } from './reducers';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
    imports: [
        CommonModule,
        GoogleChartsModule,
        StoreModule.forFeature('chart', chartReducer),
        // EffectsModule.forFeature([])
      ],
    declarations: [ChartComponent],
    exports: [ChartComponent]
})
export class ChartModule {}
