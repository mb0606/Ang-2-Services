import {Component, OnDestroy} from 'angular2/core';
import {PostService} from "./post.service";
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
import {GitHubProfileComponent} from "./github-profile.component";

@Component({
    selector: 'my-app',
    template`<div *ngIf="isLoading"><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i></div>
            <github-profile></github-profile>

            `,
    providers: [PostService, HTTP_PROVIDERS],
    directives: [GitHubProfileComponent]
})
export class AppComponent implements OnInit{
    isLoading = true;
    constructor(private _postService: PostService){
        this._postService.createPost({userId:1, title:"a", body:"b"})
    }

    ngOnInit() {
        this._postService.getPosts()
            .then(posts => {
                this.isLoading = false;
                console.log(posts)
            });
    }
}