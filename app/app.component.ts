import {Component} from 'angular2/core';
import * as gui from './gui/gui_module'



@Component({
    selector: 'my-app',
    template: `
		<div>
		    <h1>Evently</h1>
		    <event-list></event-list>
		</div>
	`,
    directives: [gui.EventListComponent]
})
export class AppComponent {
    constructor(){
        ;
    }
}

