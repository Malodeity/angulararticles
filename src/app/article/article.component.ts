import { Component, OnInit } from '@angular/core';
import { Article } from '../article-list/article';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleService } from '../article-list/article.service';
import { ReturnStatement } from '@angular/compiler';
import { Title, Meta } from '@angular/platform-browser';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {


  article: Article = new Article();
  constructor(private route : ActivatedRoute,
              private articleService : ArticleService,
              private router: Router,
              private titleService:  Title,
              private sharedService: SharedService,
              private meta: Meta
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
            this.titleService.setTitle(`${this.article.title} - ${this.sharedService.blogTitle}`); //Setting an article name on the tab

          this.meta.addTags([

              //Adding meta data for search engines to the site(Blog)

                {name: 'description', content: this.article.description},
                {property: 'og:title', content: `${this.article.title} - ${this.sharedService.blogTitle}`},
                {property: 'og:type', content: "website"},
                {property: 'og:url', content: this.sharedService.baseUrl  + this.article.key},
                {property: 'og:image', content:this.article.imageUrl },
                {property: 'og:description', content:this.article.description},
                {property: 'og:site_name', content:this.sharedService.blogTitle}





          ]);

      });
  });
}

}
