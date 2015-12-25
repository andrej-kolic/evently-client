import {Component} from 'angular2/core';
import * as gui from './gui/gui_module'
import {GuiContext} from "./gui/gui_model";

@Component({
    selector: 'my-app',
    template: `
		<div>
		    <event-list></event-list>
		    <event-details [event]="selectedEvent"></event-details>
		</div>
	`
    ,
    directives: [gui.EventListComponent, gui.EventDetailsComponent]
})
export class AppComponent {
    constructor(private _guiContext:GuiContext) {
    }

    get selectedEvent() {
        return this._guiContext.selectedEvent
    };

}

