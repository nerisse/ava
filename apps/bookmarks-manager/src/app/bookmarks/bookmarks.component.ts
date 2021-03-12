import {Component, OnInit} from '@angular/core';
import {Bookmark} from '../bookmark';
import {BookmarkService} from '../bookmark.service';
import {MessageService} from '../message.service';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {selectBookmark, State} from '../reducers';

import * as bookmarkActions from '../state/bookmarks.actions';

@Component({
  selector: 'ava-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  bookmarks: Bookmark[] = [];
  groupName: string;

  editItemUrl = '/bookmarks/edit-bookmark/';
  list$: any;
  list: Bookmark[];

  constructor(private store: Store<State>,
              private bookmarkService: BookmarkService,
              private messageService: MessageService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.groupName = this.route.snapshot.paramMap.get('group');
    this.store.dispatch(new bookmarkActions.LoadBookmarks(this.groupName));
    this.list$ = this.store.select(selectBookmark);
  }

  addBookmark(name: string, url: string, group: string): void {
    name = name.trim();
    if (!name) { return; }
    this.store.dispatch(new bookmarkActions.CreateBookmark({ name, url, group } as Bookmark));
  }

  deleteBookmark(bookmark: Bookmark): void {
    const isConfirmed = confirm(`Delete ${bookmark.name} ?`);
    if (!isConfirmed) return;
    this.store.dispatch(new bookmarkActions.DeleteBookmark(bookmark));
  }
}
