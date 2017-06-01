import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../services/auth.guard';

import { HomeComponent } from './home/home.component';

const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [ AuthGuard ] }
];

export const MODULE_ROUTES: ModuleWithProviders = RouterModule.forChild(ROUTES);
