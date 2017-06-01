import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { MODULE_ROUTES } from './fromscratch.routes';
import { FromscratchComponent } from './fromscratch.component';

import { AuthGuard } from '../../services/auth.guard';
import { AuthService } from '../../services/auth.service';

@NgModule({
  imports: [ 
      MODULE_ROUTES, 
      MaterialModule, CommonModule
  ],
  providers: [ AuthGuard, AuthService ],
  declarations: [ FromscratchComponent ]
})

export class FromscratchModule{ }

