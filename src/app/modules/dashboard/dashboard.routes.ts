import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';

const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'config', component: ConfigComponent }
];

export const MODULE_ROUTES: ModuleWithProviders = RouterModule.forChild(ROUTES);
