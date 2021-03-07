import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../bookmark';
import { BookmarkService} from '../bookmark.service';
import { MessageService} from '../message.service';

@Component({
  selector: 'ava-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  bookmarks: Bookmark[] = [];

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit() {
    this.getBookmarks();
  }

  getBookmarks(): void {
    this.bookmarkService.getBookmarks()
      .subscribe(bookmarks => this.bookmarks = bookmarks)
  }
}
