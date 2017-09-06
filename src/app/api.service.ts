import { CurrencyInfo, ICurrencyInfo } from './interfaces/currencyInfo';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class ApiService {
    currencyInfo: CurrencyInfo;

    private _fixerIoUrl = 'https://api.fixer.io/latest?base=USD';
    private _newsUrl = 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest'

    constructor(
        private _http: Http,
    ) {
        this.currencyInfo = new CurrencyInfo();
    }

    getCurrencyInfos(): Observable<ICurrencyInfo> {
        let _headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: _headers });
        return this._http
            .get(this._fixerIoUrl, options)
            .map(this.extractData);
    }

    getNews(): Observable<any> {
        let _headers = new Headers({ 'Accept': 'application/json', 'x-api-key':'8c3b1ff10f5147ceb5e55c4549a73eb3' });
        let options = new RequestOptions({ headers: _headers });
        return this._http
            .get(this._newsUrl, options)
            .map(this.extractData);
    }

    private extractData(res: Response) {
        let body = <ICurrencyInfo>res.json();
        return body;
    }


}