import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { MdDialog } from '@angular/material';

import { ConfigService } from './config.service';

@Component({
    selector: 'config-cnt',
    moduleId: module.id,
    templateUrl: 'config.component.html',
    styleUrls: [ 'config.component.css' ],
    providers: [ ConfigService ]
})
export class ConfigComponent {
  materias: any;

  constructor(homeService: ConfigService){
    this.materias = homeService.getMateria(); //usando o injectable do angular 2, para usar o servico importar o CommonModule no modulo
  }
}
