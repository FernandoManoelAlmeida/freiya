import 'hammerjs';

import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
// import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
// import { animate, state, style, transition, trigger } from '@angular/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { firebaseConfig } from '../config/firebase.config';
import { AuthService } from '../services/auth.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';

import { APP_ROUTES } from '../routes/app.routes';

@NgModule({
    imports: [
        BrowserModule,
        APP_ROUTES,
        MaterialModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],
    exports: [
        MaterialModule
    ],
    declarations: [ AppComponent, DashboardComponent ],
    providers: [ { provide: LocationStrategy, useClass: HashLocationStrategy }, AuthService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
