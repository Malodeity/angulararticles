import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import {Title} from "@angular/platform-browser";
import { ArticleComponent } from '../article/article.component';
import { Article } from '../article-list/article';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title = "About";
  constructor(private titleService:  Title,
    private sharedService: SharedService) { }

  ngOnInit() {

    this.titleService.setTitle(`${this.title} - ${this.sharedService.blogTitle}`); //Setting an article name on the tab

  }

}
