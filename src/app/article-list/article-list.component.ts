import { Component, OnInit } from '@angular/core';
import { Article } from './article';
import { ARTICLES } from './mock-articles';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles : Article[] = [];

  constructor(private articleService : ArticleService) { }

  ngOnInit() {

    this.getArticles();
  }

  //Calling the article service and subscribing into it
  getArticles(): void{
    this.articleService
    .getArticle()
    .subscribe(articles => (this.articles = articles));
  }

}
