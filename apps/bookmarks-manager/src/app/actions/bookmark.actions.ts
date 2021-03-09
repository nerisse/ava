import { createAction, props } from '@ngrx/store';

export const loadBookmarks = createAction(
  '[Bookmark] Load Bookmarks'
);

export const loadBookmarksSuccess = createAction(
  '[Bookmark] Load Bookmarks Success',
  props<{ data: any }>()
);

export const loadBookmarksFailure = createAction(
  '[Bookmark] Load Bookmarks Failure',
  props<{ error: any }>()
);
