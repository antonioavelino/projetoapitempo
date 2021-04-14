import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HomePage } from './home.page';
import { homeReducer } from '../state/home.reducer';
import { HomeEffects } from '../state/home.effects';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { UnitSelectorComponent } from './unit-selector/unit-selector.component';


@NgModule({
  declarations: [
    HomePage,
    UnitSelectorComponent,
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects]),
    ComponentsModule,
  ]
})
export class HomeModule { }
