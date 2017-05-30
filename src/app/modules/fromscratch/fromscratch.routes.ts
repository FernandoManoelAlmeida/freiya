import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FromscratchComponent } from './fromscratch.component';

const ROUTES: Routes = [
    { path: '', component: FromscratchComponent }
];

export const MODULE_ROUTES: ModuleWithProviders = RouterModule.forChild(ROUTES);
