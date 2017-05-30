import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { MdDialog } from '@angular/material';

import { HomeService } from './home.service';

@Component({
    selector: 'home-cnt',
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: [ 'home.component.css' ],
    providers: [ HomeService ]
})
export class HomeComponent {
  materias: any;

  constructor(homeService: HomeService){
    this.materias = homeService.getMateria(); //usando o injectable do angular 2, para usar o servico importar o CommonModule no modulo
  }
}
