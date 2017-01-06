import {Injectable} from '@angular/core'
import {Http, Headers} from'@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id = '56ca4b41db3eac443592';
    private client_secret = 'a595adb2eb421f2df2588fff99ce44e824b21b91';

    constructor(private _http: Http){
        console.log('GithubService is ready');
        this.username = "aljundik";
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
    }
    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
    }
    updateUser(username:string){
        this.username=username;
    }
}

