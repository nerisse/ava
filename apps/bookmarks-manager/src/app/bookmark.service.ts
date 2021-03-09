import {Injectable} from '@angular/core';
import {Bookmark} from './bookmark';
import {BOOKMARKS} from './mock-bookmarks';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  private bookmarksUrl = 'api/bookmarks';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  // getBookmarks(): Observable<Bookmark[]> {
  //   const bookmarks = of(BOOKMARKS);
  //   this.log('fetched all bookmarks');
  //   return bookmarks;
  // }

  /** Log a BookmarkService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`BookmarkService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getBookmarks(): Observable<Bookmark[]> {
    return this.http.get<Bookmark[]>(this.bookmarksUrl)
      .pipe(
        tap(_ => this.log('fetched bookmarks')),
        catchError(this.handleError<Bookmark[]>('getBookmarks', []))
      );
  }

  // getBookmark(id: number): Observable<Bookmark> {
  //   this.messageService.add(`BookmarkService: fetched bookmark id=${id}`);
  //   return of(BOOKMARKS.find(bookmark => bookmark.id === id));
  // }

  getBookmark(id: number): Observable<Bookmark> {
    const url = `${this.bookmarksUrl}/${id}`;
    return this.http.get<Bookmark>(url).pipe(
      tap(_ => this.log(`fetched bookmark id=${id}`)),
      catchError(this.handleError<Bookmark>(`getBookmark id=${id}`))
    );
  }

  getBookmarksOfGroup(group: string): Observable<Bookmark[]> {
    const bookmarks = group? this.getBookmarks().pipe(map(bookmark => bookmark.filter(b => b.group === group))) : this.getBookmarks();
    this.messageService.add(`BookmarkService: fetched bookmark group=${group}`);
    return bookmarks;
  }

  getGroups(): Observable<string[]> {
    this.messageService.add(`BookmarkService: fetching bookmark groups`);
    return of([...new Set(BOOKMARKS.map(item => item.group))]);
  }

  updateBookmark(bookmark: Bookmark): Observable<any> {
    return this.http.put(this.bookmarksUrl, bookmark, this.httpOptions).pipe(
      tap(_ => this.log(`updated bookmark id=${bookmark.id}`)),
      catchError(this.handleError<any>('updateBookmark'))
    );
  }

  addBookmark(bookmark: Bookmark): Observable<Bookmark> {
    return this.http.post<Bookmark>(this.bookmarksUrl, bookmark, this.httpOptions).pipe(
      tap((newBookmark: Bookmark) => this.log(`added bookmark w/ id=${newBookmark.id}`)),
      catchError(this.handleError<Bookmark>('addBookmark'))
    );
  }

  deleteBookmark(bookmark: Bookmark | number): Observable<Bookmark> {
    const id = typeof bookmark === 'number' ? bookmark : bookmark.id;
    const url = `${this.bookmarksUrl}/${id}`;

    return this.http.delete<Bookmark>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted bookmark id=${id}`)),
      catchError(this.handleError<Bookmark>('deleteBookmark'))
    );
  }
}
