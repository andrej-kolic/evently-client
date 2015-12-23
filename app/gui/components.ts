import {Component} from 'angular2/core';
import {ApplicationService} from "../domain/service";
import {EventModel} from "../domain/model";
import {GuiContext} from "./gui_model";

@Component({
    selector: 'event-list',
    template: `
		<div>
		    <h2>Event list</h2>
		    <ul>
		        <li *ngFor="#event of _events" (click)="onSelect(event)">{{event.title}}</li>
		    </ul>
		</div>
	`
})
export class EventListComponent {
    private _events: EventModel[];

    constructor(private _applicationService:ApplicationService, private _guiContext: GuiContext){
        _applicationService.getEvents().then(events =>
            this._events = events
        );
    }

    onSelect(event:EventModel){
        this._guiContext.selectedEvent = event;
        console.info(`selected event: ${this._guiContext.selectedEvent.title}`)
    }
}



@Component({
    selector: 'event-details',
    template:`
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