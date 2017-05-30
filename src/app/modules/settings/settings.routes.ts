import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';

const ROUTES: Routes = [
    { path: '', component: SettingsComponent }
];

export const MODULE_ROUTES: ModuleWithProviders = RouterModule.forChild(ROUTES);
