import { Component } from '@angular/core';

import { HeroService } from './hero.service';

import { Hero } from './hero';

@Component({
  selector: 'my-app',
	templateUrl: 'app/app-component.html',
	providers: [ HeroService ]
  //template: ``
})
export class AppComponent {
	title = 'My First Angular 2 App - Sunday Morning 11:44';
	heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[2];
}
