import { Action } from '@ngrx/store';
import { Bookmark } from '../bookmark';

export enum BookmarkActionTypes {
  LoadBookmarks = '[Bookmark] Load Bookmarks',
  LoadBookmarksSuccess = '[Bookmark] Load Bookmarks Success',
  LoadBookmarksFail = '[Bookmark] Load Bookmarks Fail',

  LoadGroups = '[Bookmark] Load Groups',
  LoadGroupsSuccess = '[Bookmark] Load Groups Success',
  LoadGroupsFail = '[Bookmark] Load Groups Fail',

  CreateBookmark = '[Bookmark] Create Bookmark',
  CreateBookmarkSuccess = '[Bookmark] Create Bookmark Success',
  CreateBookmarkFail = '[Bookmark] Create Bookmark Fail',

  UpdateBookmark = '[Bookmark] Update Bookmark',
  UpdateBookmarkSuccess = '[Bookmark] Update Bookmark Success',
  UpdateBookmarkFail = '[Bookmark] Update Bookmark Fail',

  DeleteBookmark = '[Bookmark] Delete Bookmark',
  DeleteBookmarkSuccess = '[Bookmark] Delete Bookmark Success',
  DeleteBookmarkFail = '[Bookmark] Delete Bookmark Fail'
}

export class LoadBookmarks implements Action {
  readonly type = BookmarkActionTypes.LoadBookmarks;
  constructor(public group: string) {}
}

export class LoadBookmarksSuccess implements Action {
  readonly type = BookmarkActionTypes.LoadBookmarksSuccess;
  constructor(public payload: Bookmark[]) {}
}

export class LoadBookmarksFail implements Action {
  readonly type = BookmarkActionTypes.LoadBookmarksFail;
  constructor(public payload: any) {}
}

export class LoadGroups implements Action {
  readonly type = BookmarkActionTypes.LoadGroups;
}

export class LoadGroupsSuccess implements Action {
  readonly type = BookmarkActionTypes.LoadGroupsSuccess;
  constructor(public payload: string[]) {}
}

export class LoadGroupsFail implements Action {
  readonly type = BookmarkActionTypes.LoadGroupsFail;
  constructor(public payload: any) {}
}

export class CreateBookmark implements Action {
  readonly type = BookmarkActionTypes.CreateBookmark;
  constructor(public payload: Bookmark) {}
}

export class CreateBookmarkSuccess implements Action {
  readonly type = BookmarkActionTypes.CreateBookmarkSuccess;
  constructor(public payload: Bookmark) {}
}

export class CreateBookmarkFail implements Action {
  readonly type = BookmarkActionTypes.CreateBookmarkFail;
  constructor(public payload: any) {}
}

export class UpdateBookmark implements Action {
  readonly type = BookmarkActionTypes.UpdateBookmark;
  constructor(public payload: Bookmark) {}
}

export class UpdateBookmarkSuccess implements Action {
  readonly type = BookmarkActionTypes.UpdateBookmarkSuccess;
  constructor(public payload: Bookmark) {}
}

export class UpdateBookmarkFail implements Action {
  readonly type = BookmarkActionTypes.UpdateBookmarkFail;
  constructor(public payload: any) {}
}

export class DeleteBookmark implements Action {
  readonly type = BookmarkActionTypes.DeleteBookmark;
  constructor(public payload: Bookmark) {}
}

export class DeleteBookmarkSuccess implements Action {
  readonly type = BookmarkActionTypes.DeleteBookmarkSuccess;
  constructor(public payload: number) {}
}

export class DeleteBookmarkFail implements Action {
  readonly type = BookmarkActionTypes.DeleteBookmarkFail;
  constructor(public payload: any) {}
}

export type BookmarkActions =
  | LoadBookmarks
  | LoadBookmarksSuccess
  | LoadBookmarksFail
  | LoadGroups
  | LoadGroupsSuccess
  | LoadGroupsFail
  | CreateBookmark
  | CreateBookmarkSuccess
  | CreateBookmarkFail
  | UpdateBookmark
  | UpdateBookmarkSuccess
  | UpdateBookmarkFail
  | DeleteBookmark
  | DeleteBookmarkSuccess
  | DeleteBookmarkFail;
