import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../bookmark';
import { selectGroups, State} from '../reducers';
import { Store} from '@ngrx/store';
import * as bookmarkActions from '../state/bookmarks.actions';

@Component({
  selector: 'ava-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  bookmarks: Bookmark[] = [];
  groups: string[] = [];
  listGroups$ : any;
  listGroup: string[];

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.getGroups();
  }

  /**
   * @returns Observable<string[]> Returns the observable array of of bookmark groups/categories
   */
  getGroups(): void {
    this.store.dispatch(new bookmarkActions.LoadGroups());
    this.listGroups$ = this.store.select(selectGroups);
  }
}
