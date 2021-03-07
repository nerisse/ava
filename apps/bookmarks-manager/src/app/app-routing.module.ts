import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent} from './bookmarks/bookmarks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookmarkDetailComponent} from './bookmark-detail/bookmark-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: BookmarkDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
