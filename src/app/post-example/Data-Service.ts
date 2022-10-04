import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { postData } from "./postDataObj";

@Injectable({
    providedIn:'root'
})
export class DataService {
    postUrl : string = "https://jsonplaceholder.typicode.com/posts";
    constructor(private httpClient : HttpClient){}
    addPost (postD : postData){
        return this.httpClient.post(this.postUrl, postD);
    }
}
