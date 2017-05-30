import {Injectable} from '@angular/core';

@Injectable()
export class HomeService {

	getMateria(){
		return ['biologia','matematica','geografia'];
	}
}