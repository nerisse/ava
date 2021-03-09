import {Bookmark} from '../bookmark';
import {BookmarkActions, BookmarkActionTypes} from './bookmarks.actions';

export interface BookmarkState {
  bookmarks: Bookmark[];
  bookmark: Bookmark;
  requesting: boolean;
  error: string;
}

export const initialState: BookmarkState = {
  bookmarks: [],
  bookmark: {} as Bookmark,
  requesting: false,
  error: ''
};

export function bookmarkReducer(
  state = initialState,
  action: BookmarkActions
): BookmarkState {
  switch (action.type) {
    case BookmarkActionTypes.LoadBookmarks:

      return { ...state, requesting: true };
    case BookmarkActionTypes.LoadBookmarksSuccess:
      return { ...state, bookmarks: action.payload, requesting: false };
    case BookmarkActionTypes.LoadBookmarksFail:
      return { ...state, bookmarks: [], error: action.payload, requesting: false };
    case BookmarkActionTypes.CreateBookmark:
      return { ...state, requesting: true };
    case BookmarkActionTypes.CreateBookmarkSuccess:
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
        requesting: false
      };
    case BookmarkActionTypes.CreateBookmarkFail:
      return {
        ...state,
        error: action.payload,
        requesting: false
      };
    case BookmarkActionTypes.UpdateBookmark:
      return { ...state, requesting: true };
    case BookmarkActionTypes.UpdateBookmarkSuccess:
      return {
        ...state,
        bookmarks: state.bookmarks.map(bookmark =>
          bookmark.id === action.payload.id ? action.payload : bookmark
        ),
        requesting: false
      };
    case BookmarkActionTypes.UpdateBookmarkFail:
      return {
        ...state,
        error: action.payload,
        requesting: false
      };
    case BookmarkActionTypes.DeleteBookmark:
      return { ...state, requesting: true };
    case BookmarkActionTypes.DeleteBookmarkSuccess:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(bookmark => bookmark.id !== action.payload),
        requesting: false
      };
    case BookmarkActionTypes.DeleteBookmarkFail:
      return {
        ...state,
        error: action.payload,
        requesting: false
      };
    default:
      return state;
  }
}
