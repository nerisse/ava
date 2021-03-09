import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { bookmarkReducer, BookmarkState } from '../state/bookmarks.reducers';

export interface State {
  bookmarks: BookmarkState;
}

/*
  This reducers combine the two reducers which is the bookmarkReducer and the villainReducer
*/
export const reducers: ActionReducerMap<State> = {
  bookmarks: bookmarkReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

// selector, selecting the state.bookmarks
export const selectBookmarksState = (state: State) => state.bookmarks;
export const selectBookmark = createSelector(
  selectBookmarksState,
  (state: BookmarkState) => state.bookmarks
);
