import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { MODULE_ROUTES } from './dashboard.routes';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from '../../services/auth.guard';
import { AuthService } from '../../services/auth.service';

@NgModule({
  imports: [ 
      MODULE_ROUTES, 
      MaterialModule, CommonModule 
  ],
  providers: [ AuthGuard, AuthService ],
  declarations: [ HomeComponent ]
})

export class DashboardModule{ }

