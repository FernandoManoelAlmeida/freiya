import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigComponent } from './config.component';

const ROUTES: Routes = [
    { path: '', component: ConfigComponent }
];

export const MODULE_ROUTES: ModuleWithProviders = RouterModule.forChild(ROUTES);
