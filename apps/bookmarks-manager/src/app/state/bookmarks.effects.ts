import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';

import {Bookmark} from '../bookmark';
import {BookmarkService} from '../bookmark.service';
import * as bookmarkActions from './bookmarks.actions';

@Injectable()
export class BookmarkEffects {
  constructor(private actions$: Actions, private bookmarkService: BookmarkService) {}

  loadBookmarks$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(bookmarkActions.BookmarkActionTypes.LoadBookmarks), // sends LoadBookmarks action
    tap(val => console.log('BEFORE MAP:', val)),
    mergeMap((bookmark: Bookmark) =>
      this.bookmarkService.getBookmarksOfGroup(bookmark.group).pipe(
        map(bookmarks => new bookmarkActions.LoadBookmarksSuccess(bookmarks)),
        catchError(err => of(new bookmarkActions.LoadBookmarksFail(err)))
      )
    ),
    tap(val => console.log('AFTER MAP:', val))
  ));


  createBookmark$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(bookmarkActions.BookmarkActionTypes.CreateBookmark),
    map((action: bookmarkActions.CreateBookmark) => action.payload),
    mergeMap((bookmark: Bookmark) =>
      this.bookmarkService.addBookmark(bookmark).pipe(
        map(newBookmark => new bookmarkActions.CreateBookmarkSuccess(newBookmark)),
        catchError(err => of(new bookmarkActions.CreateBookmarkFail(err)))
      )
    )
  ));


  updateBookmark$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(bookmarkActions.BookmarkActionTypes.UpdateBookmark),
    map((action: bookmarkActions.UpdateBookmark) => action.payload),
    mergeMap((bookmark: Bookmark) =>
      this.bookmarkService.updateBookmark(bookmark).pipe(
        map(updatedBookmark => new bookmarkActions.UpdateBookmarkSuccess(updatedBookmark)),
        catchError(err => of(new bookmarkActions.UpdateBookmarkFail(err)))
      )
    )
  ));

  deleteBookmark$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(bookmarkActions.BookmarkActionTypes.DeleteBookmark),
    map((action: bookmarkActions.DeleteBookmark) => action.payload),
    tap(val => console.log('BEFORE MAP:', val)),
    mergeMap((bookmark: Bookmark) =>
      this.bookmarkService.deleteBookmark(bookmark).pipe(
        map(_ => new bookmarkActions.DeleteBookmarkSuccess(_)),
        catchError(err => of(new bookmarkActions.DeleteBookmarkFail(err)))
      )
    ),
    tap(val => console.log('AFTER MAP:', val))
  ));


}
