import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
	<h2>My favorite hero is: {{myHero.name}}</h2>
	<p>Heroes:</p>
  <ul>
    <li *ngFor="let hero of heroes">
      {{ hero.name }}
      </li>
  </ul>
  <p *ngIf="heroes.length > 3">There are many heroes!</p>
	`
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
