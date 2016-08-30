import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
@Injectable()
export class HeroService {
  getHeroes(): Hero[] {
		return HEROES;
  }
}
