import { Injectable } from "@angular/core";
import { createEffect } from "@ngrx/effects";
import { combineLatest, merge } from "rxjs";
import { catchError, mergeMap, withLatestFrom } from "rxjs/operators";

@Injectable()
export class DetailsEffects {

    loadCurrentWeather$ = createEffect(() => this.actions$
    .pipe(
        ofType(fromDetailsActions.loadWeatherDetails),
        withLatestFrom(this.store.pipe(select(fromRouterSelectors.selectRouterQueryParams))),
        mergeMap(([, queryParams]: [any, Params]) => 
            combineLatest([
            this.weatherService.getCityWeatherByCoord(queryParams.lat, queryParams.lon),
             this.weatherService.getWeatherDetails(queryParams.lat, queryParams.lon),   
            ])
            ),
            catchError(err, caught$) => {
                this.store.dispatch(fromDetailsActions.loadWeatherDetailsFailed()),
                return caught$;
            }),
            map(([current, daily]) => {
                const entity = daily;
                entity.city = {...current.city, timeZone: daily.city.timeZone};
                return fromDetailsActions.loadWeatherDetailsSuccess({ entity });
            }),
        )
    );

    constructor(private actions$: Actions,
                private store: Store<AppState>,
                private weatherService: WeatherService) {

    }
}