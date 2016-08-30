
export class HeroService {
  private heroes: Hero[] = [];

//  constructor(
    //private backend: BackendService,
  //  private logger: LoggerService) { }

  getHeroes() {
    //this.backend.getAll(Hero).then( (heroes: Hero[]) => {
    //  this.logger.log(`Fetched ${heroes.length} heroes.`);
    //  this.heroes.push(...heroes); // fill cache
    //});
		this.heroes = [
	    new Hero(3, 'SWindstorm'),
	    new Hero(33, 'SBombasto'),
	    new Hero(35, 'SMagneta'),
	    new Hero(30, 'STornado')
	  ];
    return this.heroes;
  }
}
