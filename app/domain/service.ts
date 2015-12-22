import {EventModel} from "./model";


export class ApplicationService {

    getEvents() {
        return Promise.resolve(this.EVENTS);
    }

    private EVENTS: EventModel[] = [
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

}
