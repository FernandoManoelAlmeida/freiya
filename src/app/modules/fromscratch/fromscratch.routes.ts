import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../services/auth.guard';

import { FromscratchComponent } from './fromscratch.component';

const ROUTES: Routes = [
    { path: '', component: FromscratchComponent, canActivate: [ AuthGuard ] }
];

export const MODULE_ROUTES: ModuleWithProviders = RouterModule.forChild(ROUTES);
