import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../services/auth.guard';

import { SettingsComponent } from './settings.component';

const ROUTES: Routes = [
    { path: '', component: SettingsComponent, canActivate: [ AuthGuard ] }
];

export const MODULE_ROUTES: ModuleWithProviders = RouterModule.forChild(ROUTES);
