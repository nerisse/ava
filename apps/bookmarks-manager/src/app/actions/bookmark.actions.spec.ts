import * as fromBookmark from './bookmark.actions';

describe('loadBookmarks', () => {
  it('should return an action', () => {
    expect(fromBookmark.loadBookmarks().type).toBe('[Bookmark] Load Bookmarks');
  });
});
