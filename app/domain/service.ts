import {EventModel} from "./model";

import {Request, Response} from 'angular2/http';
import {RESTClient, GET, PUT, POST, DELETE, BaseUrl, Headers, DefaultHeaders, Path, Body, Query} from './angular2-rest';
import {Injectable} from "angular2/core";

import {
Http, Headers as AngularHeaders,
RequestOptions, RequestMethod as RequestMethods, RequestOptionsArgs,
URLSearchParams
} from 'angular2/http';

import {Observable} from "rxjs/Observable";



export class ServerMessage {
    message:string;
}



@BaseUrl("http://localhost:3000/api/v1/")
@DefaultHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
})
export class ApplicationService extends RESTClient {

    public constructor(/*@Inject(Http)*/ protected http:Http) {
        super(http);
    }

    public getLocalConfig(): Observable<any> {
        var path = 'tsconfig.json';
        return this.http.get(path);
    }

    @GET("ping/")
    public getPing(/*@Query("sort") sort?: string*/):Observable<ServerMessage> {
        return null;
    };


    @GET("users/")
    public getUsers():Observable<Response> {
        return null;
    };


    @GET("users/")
    public getEvents():Observable<EventModel[]> {
        return null;
    };


    getMockEvents():Promise<EventModel[]> {
        return Promise.resolve(this.EVENTS);
    }

    private EVENTS:EventModel[] = [
        {
            id: 1,
            title: "event 1",
            description: null,
            location: null,
            startTime: null
        },
        {
            id: 2,
            title: "event 2",
            description: null,
            location: null,
            startTime: null
        }
    ];


    // User

    login() {

    }

}
