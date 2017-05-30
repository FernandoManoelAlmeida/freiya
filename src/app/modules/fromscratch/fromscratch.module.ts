import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { MODULE_ROUTES } from './fromscratch.routes';
import { FromscratchComponent } from './fromscratch.component';

@NgModule({
  imports: [ 
      MODULE_ROUTES, 
      MaterialModule, CommonModule
  ],
  declarations: [ FromscratchComponent ]
})

export class FromscratchModule{ }

