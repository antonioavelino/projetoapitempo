import { createAction, props } from '@ngrx/store';

export const removeBookmmark = createAction(
    '[Bookmark] Remove Bookmark',
    props<{ id: number }>(),
);