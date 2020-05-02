import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';


//Nav Bar & Page Routing
const routes: Routes = [

 {path: 'articles', component: ArticleListComponent},
 {path: 'about', component: AboutComponent},
 {path: '404', component: NotFoundComponent},
 {path: '', component: ArticleListComponent},
 {path: ':key', component: ArticleComponent}, //Routing using the article key on the services to have different pages used as route key names.
 {path: '**', component: NotFoundComponent} //for any wrong url

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
