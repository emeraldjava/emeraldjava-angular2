import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { LoggerService } from './logger.service';
//import { HeroService } from './hero.service';

@NgModule({
  imports:      [ BrowserModule ],
	providers:    [ LoggerService ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
