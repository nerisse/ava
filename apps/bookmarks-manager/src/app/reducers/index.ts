import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { bookmarkReducer, BookmarkState } from '../state/bookmarks.reducers';

export interface State {
  bookmarks: BookmarkState;
}

export const reducers: ActionReducerMap<State> = {
  bookmarks: bookmarkReducer
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
export const selectGroupsState = (state: State) => state.bookmarks;
export const selectGroups = createSelector(
  selectGroupsState,
  (state: BookmarkState) => state.groups
);
