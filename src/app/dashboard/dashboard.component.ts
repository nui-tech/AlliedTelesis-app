import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pair;
  rate;
  constructor(
    private titleService: Title 
  ) { }

  ngOnInit() {
     this.titleService.setTitle( "Dashboard - AT Currency" );
     this.pair = localStorage.getItem('pair');
     this.rate = localStorage.getItem('rate');
  }


  clearWatchingPair(){
    localStorage.removeItem('pair');
    this.pair = null;
  }

}
