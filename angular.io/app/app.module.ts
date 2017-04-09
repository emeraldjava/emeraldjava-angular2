import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// http://stackoverflow.com/questions/38884167/angular-2-tutorial-unhandled-promise-rejection-on-routing-section
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent } from './hero-list.component';

import { LoggerService } from './logger.service';
import { HeroService } from './hero.service';

@NgModule({
  imports:      [
		BrowserModule,
		FormsModule ],
	providers:    [
		LoggerService,
		HeroService ],
  declarations: [
		AppComponent,
		HeroDetailComponent,
		HeroListComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {

}
