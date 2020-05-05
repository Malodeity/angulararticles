import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './article';
import { Key } from 'protractor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

constructor(private http: HttpClient) { }

//importing the mock articles class to this service
getArticle(): Observable<Article[]> {
  return this.http.get<Article[]>("http://localhost:8000/articles");
}



//importing the mock articles class to this service (for each selected article)
getArticles(key : string): Observable<Article>{
  return this.http.get<Article>("http://localhost:8000/articles/" + key);
}

}
