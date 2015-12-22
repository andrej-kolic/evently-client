export interface Entity {
    id: number;
}


export class EventModel {
    id: number;
    title: string;
    description: string;
    location: Geolocation;
    startTime: Date;
}
