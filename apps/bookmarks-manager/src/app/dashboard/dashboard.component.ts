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
    this.getGroups();
  }

  /**
   * @returns Observable<string[]> Returns the observable array of of bookmark groups/categories
   */
  getGroups(): void {
    this.bookmarkService.getGroups().subscribe(groups => this.groups = groups);
  }
}
