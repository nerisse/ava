import { Injectable } from '@angular/core';
import { Bookmark } from './bookmark';
import { BOOKMARKS } from './mock-bookmarks';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor(private messageService: MessageService) { }

  getBookmarks(): Observable<Bookmark[]> {
    const bookmarks = of(BOOKMARKS);
    this.messageService.add('BookmarkService: fetched bookmarks');
    return bookmarks;
  }

  getBookmark(id: number): Observable<Bookmark> {
    this.messageService.add(`BookmarkService: fetched bookmark id=${id}`);
    return of(BOOKMARKS.find(bookmark => bookmark.id === id));
  }

  getBookmarksOfGroup(group: string): Observable<Bookmark[]> {
    this.messageService.add(`BookmarkService: fetched bookmark group=${group}`);
    return of(BOOKMARKS.filter(bookmark => bookmark.group === 'Generic'));
  }

  getGroups(): Observable<string[]> {
    this.messageService.add(`BookmarkService: fetching bookmark groups`);
    return of([...new Set(BOOKMARKS.map(item => item.group))]);

  }

}
