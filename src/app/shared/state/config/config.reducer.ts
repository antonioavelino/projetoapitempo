import { createReducer, on } from '@ngrx/store';
import { UnitSelectorComponent } from 'src/app/pages/home/containers/unit-selector/unit-selector.component';

import { Units } from '../../models/units.enum';
import * as fromConfigActions from './config.actions';

export interface ConfigState {
    unit: UnitSelectorComponent;
}

export const configInitialState: ConfigState = {
    unit: Units.Metric,
}

export const configReducer = createReducer(
    configInitialState,
    on(fromConfigActions.updateUnit, (state, { unit }) => ({
        ...state,
        unit,
    })),
);