import { createReducer, Action, on } from '@ngrx/store';

import { Bookmark } from "src/app/shared/bookmark.model/bookmark.model"

import * as fromHomeActions from '../../home/state/home.actions';
import * as fromBookmarksAction from './bookmarks.actions';

export interface BookmarksState {
    list: Bookmark[];
}

export const bookmarkInitialState: BookmarksState = {
    list: [],
};

const reducer = createReducer(
    bookmarkInitialState,
    on(fromHomeActions.toggleBookmark, (state, { entity }) => ({ 
        ...state,
        list: toogleBookmark(state.list, entity),
    }))
    on(fromBookmarksAction.removeBookmark, (state, { id }) => ({
        ...state,
        list: state.list.filter(b => b.id !== id),
    })),
);

export function bookmarkReduce(state: BookmarksState | undefined, action: Action) {
    return reducer(state, action);
}

function toggleBookmark(list: Bookmark[], entity: Bookmark[] {
    if (!!listLazyRoutes.find(bookmark.id => === ExtensionActionTypes.id)) {
        return listLazyRoutes.filter(bookmark => bookmark.id !== ExtensionActionTypes.id);
    }
    return [...list, entity];
}