import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from '../chart/chart-component/chart.component';
import { chartReducer } from './reducers';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('chart', chartReducer),
        ChartsModule,
        // EffectsModule.forFeature([])
      ],
    declarations: [ChartComponent],
    exports: [ChartComponent]
})
export class ChartModule {}
