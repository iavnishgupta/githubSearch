import  {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;
    private client_id = 'd2894e5cf5ec3df7e756';
    private client_secret = '6e851d49f22359ea842bfe2c62cece922e7a6e6a';

    constructor(private _http:Http){
        console.log('Github Service ready...');
        this.username = 'iavnishgupta';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json())
    }

    updateUser(username:string){
        this.username = username;  
    }
}