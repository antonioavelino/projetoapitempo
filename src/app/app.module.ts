import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookmarksModule } from './pages/bookmarks/bookmarks.module';
import { HomeModule } from './pages/home/containers/home.module';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CorrentWeatherComponent } from './pages/home/components/corrent-weather/corrent-weather.component';
import { DetailedWeatherComponent } from './shared/components/detailed-weather/detailed-weather.component';
import { reducers } from './shared/state/router/app.reducer';
import { CustomRouterSerializer } from './shared/state/router/router.reducer';
import { CitiesTypeaheadComponent } from './shared/components/cities-typeahead/cities-typeahead.component';


@NgModule({
  declarations: [
    AppComponent,
    CorrentWeatherComponent,
    DetailedWeatherComponent,
    CitiesTypeaheadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    BookmarksModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({ serializer: CustomRouterSerializer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
