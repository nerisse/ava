import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../bookmark';
import { BookmarkService} from '../bookmark.service';
import { MessageService} from '../message.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ava-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  bookmarks: Bookmark[] = [];

  constructor(private route: ActivatedRoute,
              private bookmarkService: BookmarkService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.getBookmarksOfGroup();
  }

  getBookmarks(): void {
    this.bookmarkService.getBookmarks()
      .subscribe(bookmarks => this.bookmarks = bookmarks)
  }

  getBookmarksOfGroup(): void{
    const groupName = this.route.snapshot.paramMap.get('group');
    this.messageService.add('BookmarksComponent:'+ groupName);
    this.bookmarkService.getBookmarksOfGroup(groupName)
      .subscribe(bookmarks => this.bookmarks = bookmarks)
  }
}
