import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {ApplicationService} from "./domain/service";


console.info('starting Evently...');
bootstrap(AppComponent, [ApplicationService]);

