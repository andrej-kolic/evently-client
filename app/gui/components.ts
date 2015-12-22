import {Component} from 'angular2/core';
import {ApplicationService} from "../domain/service";
import {EventModel} from "../domain/model";

@Component({
    selector: 'event-list',
    template: `
		<div>
		    <ul *ngFor="#event of _events">
		        <li>{{event.title}}</li>
		    </ul>
		</div>
	`
    //,
    //properties: ['events: events']
})
export class EventListComponent {
    private _events: EventModel[];

    constructor(private _applicationService:ApplicationService){
        _applicationService.getEvents().then(events =>
            this._events = events
        );
    }
}
