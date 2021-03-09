import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../bookmark';
import { BookmarkService} from '../bookmark.service';
import { MessageService} from '../message.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ava-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: []
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
}
