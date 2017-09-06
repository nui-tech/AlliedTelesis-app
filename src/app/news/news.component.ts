import { News } from './../interfaces/news';
import { ApiService } from './../api.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  dataSources= new News();

  constructor(
    private titleService: Title,
    public apiService: ApiService
  ) {
    this.titleService.setTitle("Economic News - AT Currency");
  }

  ngOnInit() {
    this.dataSources.articles = [];

    this.apiService.getNews()
      .subscribe(
      res => { this.dataSources = res; console.log(res); },
      error => { },
      () => { }
      );

    var xxx = {
      author: "Rachel Kaser",
      description:"US officials today announced the end of Deferred Action for Childhood Arrivals (DACA), a program designed to aid children brought into the country illegally by granting them temporary ...",
      publishedAt: "2017-09-06T02:01:54Z",
      title: "Apple, Microsoft, and Google CEOs vow to fight for employees affected by DACA",
      url: "https://thenextweb.com/us/2017/09/06/apple-microsoft-and-google-ceos-vow-to-fight-for-employees-affected-by-daca/",
      urlToImage: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/01/timcook-social.jpg",
    }
  }

}
