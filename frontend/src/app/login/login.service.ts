import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

    constructor(private http: Http) { }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }

    verifyCredentials(postBody):Observable<Response>{
        let postUrl= 'https://intense-retreat-16179.herokuapp.com/signin';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(postUrl, postBody, options)
                        .map(this.extractData)
                        .catch(this.handleErrorObservable);
    }

}
