import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { MdButtonModule, MdTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ApiService } from './api.service';

import { ObjNgFor } from './pipes/NgForObj';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'economicnews', component: NewsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent}
];




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NewsComponent,
    PageNotFoundComponent,

    //pipes
    ObjNgFor
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    //ng material
    MdButtonModule,
    MdTableModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
