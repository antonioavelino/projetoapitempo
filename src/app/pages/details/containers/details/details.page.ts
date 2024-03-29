import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from '../../../../shared/state/app.reducer';
import * as fromDetailsActions from '../../state/details.actions';

@Component({
  selector: 'jv-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.css']
})
export class DetailsPage implements OnInit {

  constructor(private store: Store<AppState>) { 
  }

  ngOnInit() {
    this.store.dispatch(fromDetailsActions.loadWeatherDetails());
  }
}
