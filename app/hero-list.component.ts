import { Component, Input } from '@angular/core';

import { Hero } from './hero';

import { HeroService } from './hero.service';


@Component({
  selector:    'hero-list',
  templateUrl: 'app/hero-list.component.html',
  providers:   [ HeroService ]
})

export class HeroListComponent implements OnInit {
  @Input() heroes: Hero[];
  selectedHero: Hero;

  constructor(service:HeroService) { }

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }

  selectHero(hero: Hero) { this.selectedHero = hero; }
}
