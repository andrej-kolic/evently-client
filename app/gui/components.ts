import {Component} from 'angular2/core';
import {ApplicationService} from "../domain/service";
import {EventModel, User} from "../domain/model";
import {GuiContext} from "./gui_model";
import {AfterViewInit} from "angular2/core";

@Component({
    selector: 'event-list',
    template: `
		<div>
		    <h2>User list</h2>
		    <ul>
		        <!--<li *ngFor="#event of _events" (click)="onSelect(event)">{{event.title}}</li>-->
		        <li *ngFor="#user of _users" (click)="onSelect(event)">{{user.username}}</li>
		    </ul>
		</div>
	`
})
export class EventListComponent implements AfterViewInit {
    private _events:EventModel[];
    private _users:User[];

    constructor(private _guiContext:GuiContext, private _appService:ApplicationService) {
    }

    onSelect(event:EventModel) {
        this._guiContext.selectedEvent = event;
        console.info(`selected event: ${this._guiContext.selectedEvent.title}`)
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit');
        this._appService.getUsers()
        .subscribe(a => {
            this._users = a.json()['users'];
            console.log(this._users[0]);
        });
    }

}


@Component({
    selector: 'event-details',
    template: `
        <div *ngIf="event">
            <h2>Event details</h2>
            <p>{{event.title}}</p>
        </div>
    `,
    inputs: ['event']

})
export class EventDetailsComponent {
    public event:EventModel;
}