import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { BookmarkDetailComponent } from './bookmark-detail/bookmark-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { BookmarkEffects } from './state/bookmarks.effects';
import { BookmarkService } from './bookmark.service';

@NgModule({
  declarations: [AppComponent, BookmarksComponent, BookmarkDetailComponent, MessagesComponent, DashboardComponent, NavComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, BrowserAnimationsModule, LayoutModule, MatToolbarModule,
    MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatFormFieldModule,
    MatInputModule, HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([BookmarkEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []],
  providers: [BookmarkService],
  bootstrap: [AppComponent],
})
export class AppModule {}
