import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {ApplicationService} from "./domain/service";
import {GuiContext} from "./gui/gui_model";


console.info('starting Evently...');

var customProviders: Array<any> = [
    ApplicationService,
    GuiContext
];

bootstrap(AppComponent, customProviders);

