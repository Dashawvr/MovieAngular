import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FavoriteComponent} from './favorite/favorite.component';
import {ContactComponent} from './contact/contact.component';
import {SearchComponent} from './search/search.component';
import {DetailComponent} from './detail/detail.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
// import {AuthGuard} from './help/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'favorite', component: FavoriteComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'movie-search', component: SearchComponent},
  {path: 'movie-detail', component: DetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
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
