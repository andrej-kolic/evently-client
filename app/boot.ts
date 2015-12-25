import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {ApplicationService} from "./domain/service";
import {GuiContext} from "./gui/gui_model";
import {HTTP_PROVIDERS} from 'angular2/http';

import 'rxjs/Rx';   // mandatory to import all operators!

console.info('starting Evently...');

var customProviders: Array<any> = [
    HTTP_PROVIDERS,

    ApplicationService,
    GuiContext
];

bootstrap(AppComponent, customProviders)
    .then(() => console.info('done'))
    .catch(err => console.error(err));

