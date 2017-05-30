import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../modules/app.component';

const ROUTES: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard',     loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule' },
    { path: 'fromscratch',   loadChildren: 'app/modules/fromscratch/fromscratch.module#FromscratchModule' },
    { path: 'settings',        loadChildren: 'app/modules/settings/settings.module#SettingsModule' }
];

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(ROUTES);