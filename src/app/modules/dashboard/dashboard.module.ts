import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { MODULE_ROUTES } from './dashboard.routes';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';

@NgModule({
  imports: [ 
      MODULE_ROUTES, 
      MaterialModule, CommonModule 
  ],
  declarations: [ HomeComponent, ConfigComponent ]
})

export class DashboardModule{ }

