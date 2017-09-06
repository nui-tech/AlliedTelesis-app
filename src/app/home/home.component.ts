import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from "@angular/router";

import { Observable } from 'rxjs/Observable';

import { CurrencyInfo } from './../interfaces/currencyInfo';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataSource: CurrencyInfo;

  constructor(
    private titleService: Title,
    public apiService: ApiService,
    private _router: Router
  ) {
    this.titleService.setTitle("Home - AT Currency");
  }

  ngOnInit() {
    this.dataSource = new CurrencyInfo();
    this.dataSource.base = "";
    this.dataSource.date = "";
    this.dataSource.rates = {};
    
    this.apiService.getCurrencyInfos()
      .subscribe(
      res => { this.dataSource = res; },
      error => { },
      () => { }
      );
  }


  addToWatchList(pair,rate){  
    localStorage.setItem('pair', pair);
    localStorage.setItem('rate', rate);
    this._router.navigate(['/dashboard']);

  }
  

}






