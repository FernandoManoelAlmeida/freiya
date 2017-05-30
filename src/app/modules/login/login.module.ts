import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { MODULE_ROUTES } from './login.routes';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [ 
      MODULE_ROUTES, 
      MaterialModule, CommonModule
  ],
  declarations: [ LoginComponent ]
})

export class LoginModule{ }

