import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";

@Injectable()
export class ChartEffects {

  constructor(private actions$: Actions){
    actions$.subscribe(action => {
      if (action.type === '[Chart] Fetch Employees2018') {

      }
    })
  }


}
