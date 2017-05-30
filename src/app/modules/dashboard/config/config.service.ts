import {Injectable} from '@angular/core';

@Injectable()
export class ConfigService {

	getMateria(){
		return ['biologia','matematica','geografia'];
	}
}