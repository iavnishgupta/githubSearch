import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent {
    user[];
    username: string;
    constructor(private _githubService:GithubService){
        this._githubService.getUser().subscribe(user => {
            console.log(user);
            this.user = user;
        })
    }

    searchUser(){
        console.log("It's Working ");
        this._githubService.updateUser(this.username);

         this._githubService.getUser().subscribe(user => {
            console.log(user);
            this.user = user;
        })
    }
}
