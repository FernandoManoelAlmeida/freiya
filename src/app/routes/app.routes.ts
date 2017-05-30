import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../modules/app.component';

const ROUTES: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule' },
    { path: 'fromscratch', loadChildren: 'app/modules/fromscratch/fromscratch.module#FromscratchModule' },
    { path: 'config', loadChildren: 'app/modules/config/config.module#ConfigModule' }
];

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(ROUTES);