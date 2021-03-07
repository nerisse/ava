import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../bookmark';
import { BookmarkService } from '../bookmark.service';

@Component({
  selector: 'ava-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  bookmarks: Bookmark[] = [];
  groups: string[] = [];

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit() {
    //this.getBookmarksOfGroup('Generic');
    this.getBookmarkGroups();
  }

  getBookmarks(): void {
    this.bookmarkService.getBookmarks()
      .subscribe(bookmarks => this.bookmarks = bookmarks.slice(1, 5));
  }

  getBookmarksOfGroup(group: string): void {
    this.bookmarkService.getBookmarksOfGroup(group)
      .subscribe(bookmarks => this.bookmarks = bookmarks.slice(0,2))
  }

  getBookmarkGroups(): void {
    this.bookmarkService.getGroups().subscribe(groups => this.groups = groups);
  }
}
