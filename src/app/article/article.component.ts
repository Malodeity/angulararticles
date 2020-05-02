import { Component, OnInit } from '@angular/core';
import { Article } from '../article-list/article';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleService } from '../article-list/article.service';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {


  article: Article = new Article();
  constructor(private route : ActivatedRoute,
              private articleService : ArticleService,
              private router: Router
              )
              {}

  ngOnInit() {

    this.route.params.subscribe(params => {
      
      const key = params.key;
      this.articleService.getArticles(key).subscribe(article => {
         
        //If statement for undefined article that doesn't exist (404 Page)

      if (article === undefined){
        this.router.navigateByUrl('404'); //Redirecting back to the 404 router component
           return;
      }
            this.article = article;
            console.log(this.article);

      });
  });

  

  

}

}
