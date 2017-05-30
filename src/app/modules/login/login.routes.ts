import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const ROUTES: Routes = [
    { path: '', component: LoginComponent }
];

export const MODULE_ROUTES: ModuleWithProviders = RouterModule.forChild(ROUTES);
