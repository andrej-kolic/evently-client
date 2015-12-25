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


export class User {
    id: number;
    token: string;
}

export class DomainContext {
    loggedUser: User;
}
