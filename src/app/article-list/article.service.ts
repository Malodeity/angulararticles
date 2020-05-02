import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './article';
import { ARTICLES } from './mock-articles';
import { Key } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

constructor() { }

//importing the mock articles class to this service
getArticle(): Observable<Article[]> {
  const articles: Article[] = ARTICLES;
  return of(articles);
}

getArticles(key : string): Observable<Article>{
  const articles : Article[] = ARTICLES.filter(a => a.key === key);
  return of(articles[0]);

}

}
