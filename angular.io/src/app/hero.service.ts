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

  getHero(id: number): Promise<Hero> {
    const url = '${this.heroes_url/${id}';
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('error',error);
    return Promise.reject(error.message || error);
  }
}
