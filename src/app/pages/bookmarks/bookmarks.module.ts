import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { BookmarksPage } from './bookmarks.page';
import { bookmarkReducer } from './state/book,arks.reducer';


@NgModule({
  declarations: [
    BookmarksPage
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('bookmark', bookmarkReducer),
    ],
    declarations: [
      BookmarksPage,
    ],
})
export class BookmarksModule {
  
 }
