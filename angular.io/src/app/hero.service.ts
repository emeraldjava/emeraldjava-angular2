import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
//import { HEROES } from './mock-heroes';

// https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
@Injectable()
export class HeroService {

  private  heroes_url = 'api/heroes';

  constructor(private http: Http){}

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroes_url)
        .toPromise()
        .then(response => response.json().data as Hero[])
        .catch(this.handleError);
    //return Promise.resolve(HEROES);
  }

  private handleError(error: any): Promise<any> {
    console.error('error',error);
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
