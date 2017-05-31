import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth.service';

import { AppComponent } from '../modules/app.component';

const ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login',         loadChildren: 'app/modules/login/login.module#LoginModule' },
    { path: 'dashboard',     loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule', canActivate: [ AuthGuard ] },
    { path: 'fromscratch',   loadChildren: 'app/modules/fromscratch/fromscratch.module#FromscratchModule', canActivate: [ AuthGuard ] },
    { path: 'settings',      loadChildren: 'app/modules/settings/settings.module#SettingsModule', canActivate: [ AuthGuard ] }
];

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(ROUTES);