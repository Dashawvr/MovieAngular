import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FavoriteComponent} from './favorite/favorite.component';
import {ContactComponent} from './contact/contact.component';
import {SearchComponent} from './search/search.component';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'favorite', component: FavoriteComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'movie-search', component: SearchComponent},
  {path: 'movie-detail', component: DetailComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
