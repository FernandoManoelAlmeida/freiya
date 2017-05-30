import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { MODULE_ROUTES } from './config.routes';
import { ConfigComponent } from './config.component';

@NgModule({
  imports: [ 
      MODULE_ROUTES, 
      MaterialModule, CommonModule
  ],
  declarations: [ ConfigComponent ]
})

export class ConfigModule{ }

