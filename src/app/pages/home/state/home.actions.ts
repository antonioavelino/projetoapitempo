import { createAction, props } from "@ngrx/store";

import { Bookmark } from 'src/app/shared/models/bookmark.model';

export const loadCurrentWeather = createAction(
    '[Home] Load Current Weather',
    props<{ query: string }>(),
);

export const loadCurrentWeatherSuccess = createAction(
    '[Weather API] Load Current Weather Success',
    props<{ entity: any }>(),
);

export const loadCurrentWeatherFailed = createAction(
    '[Weather API] Load Current Weather Failed',
);
export const toggleBookmark = createAction(
    '[Home] Toggle Bookmark',
    props<{ entity: Bookmark }>(),
)


export function clearHomeState(clearHomeState: any, arg1: () => import("./home.reducer").HomeState): import("@ngrx/store").ReducerTypes<import("./home.reducer").HomeState, import("@ngrx/store").ActionCreator<string, import("@ngrx/store").Creator<any[], object>>[]> {
   throw new Error('Function not implemented.');
}
export function loadCurrentWeatherById(loadCurrentWeather: ActionCreator<"[Home] Load Current Weather", (props: { query: string; }) => { query: string; } & TypedAction<"[Home] Load Current Weather">>, loadCurrentWeatherById: any, arg2: (state: import("./home.reducer").HomeState) => { loading: true; error: false; entity: any; }): import("@ngrx/store").ReducerTypes<import("./home.reducer").HomeState, import("@ngrx/store").ActionCreator<string, import("@ngrx/store").Creator<any[], object>>[]> {
   throw new Error('Function not implemented.');
}

