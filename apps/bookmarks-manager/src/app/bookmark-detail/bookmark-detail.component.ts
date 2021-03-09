import { Component, OnInit, Input } from '@angular/core';
import { Bookmark} from '../bookmark';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookmarkService} from '../bookmark.service';
import { Store } from '@ngrx/store';
import { State } from '../reducers';

@Component({
  selector: 'ava-bookmark-detail',
  templateUrl: './bookmark-detail.component.html',
  styleUrls: []
})
export class BookmarkDetailComponent implements OnInit {

  @Input() bookmark?: Bookmark;
  constructor(private store: Store<State>,
              private route: ActivatedRoute,
              private bookmarkService: BookmarkService,
              private location: Location) { }

  ngOnInit(): void {
    this.getBookmark();
  }

  getBookmark(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookmarkService.getBookmark(id)
      .subscribe(bookmark => this.bookmark = bookmark);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.bookmarkService.updateBookmark(this.bookmark)
      .subscribe(() => this.goBack());
  }
}
