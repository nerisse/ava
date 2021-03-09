import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Bookmark } from './bookmark';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const bookmarks = [
      { id: 1, name: 'Google', url: 'https://www.google.com/', group: 'Generic'},
      { id: 2, name: 'GitHub', url: 'https://google.com', group: 'Dev'},
      { id: 3, name: 'Stack Overflow', url: 'https://stackoverflow.com/', group: 'Dev'},
      { id: 4, name: 'Angular', url: 'https://angular.io/', group: 'Dev'},
      { id: 5, name: 'Satoshi White Paper', url: 'https://bitcoin.org/en/bitcoin-paper', group: 'Crypto'},
    ]
    return {bookmarks};
  }

  /**
   * Overrides the genId method to ensure that a bookmark always has an id.
   * If the bookmarks array is empty, the method below initializes with id 1, else increment (id+1)
   * @param bookmarks - array of Bookmark[]
   */
  genId(bookmarks: Bookmark[]): number {
    return bookmarks.length > 0 ? Math.max(...bookmarks.map(bookmark => bookmark.id)) + 1 : 1;
  }
}
