import {Component, OnInit} from '@angular/core';
import {Bookmark} from '../bookmark';
import {BookmarkService} from '../bookmark.service';
import {MessageService} from '../message.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ava-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  bookmarks: Bookmark[] = [];
  groupName: string;

  constructor(private route: ActivatedRoute,
              private bookmarkService: BookmarkService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.groupName = this.route.snapshot.paramMap.get('group');
    this.getBookmarksOfGroup();
  }

  getBookmarks(): void {
    this.bookmarkService.getBookmarks()
      .subscribe(bookmarks => this.bookmarks = bookmarks)
  }

  getBookmarksOfGroup(): void{

    this.messageService.add('BookmarksComponent:'+ this.groupName);
    this.bookmarkService.getBookmarksOfGroup(this.groupName)
      .subscribe(bookmarks => this.bookmarks = bookmarks)
  }

  addBookmark(name: string, url: string, group: string): void {
    name = name.trim();
    if (!name) { return; }
    this.bookmarkService.addBookmark({ name, url, group } as Bookmark)
      .subscribe(bookmark => {
        this.bookmarks.push(bookmark);
      });
  }

  deleteBookmark(bookmark: Bookmark): void {
    this.bookmarks = this.bookmarks.filter(h => h !== bookmark);
    this.bookmarkService.deleteBookmark(bookmark).subscribe();
  }
}
