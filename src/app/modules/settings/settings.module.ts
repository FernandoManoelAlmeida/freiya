import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { MODULE_ROUTES } from './settings.routes';
import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [ 
      MODULE_ROUTES, 
      MaterialModule, CommonModule
  ],
  declarations: [ SettingsComponent ]
})

export class SettingsModule{ }

