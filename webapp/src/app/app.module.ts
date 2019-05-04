import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PricingsComponent } from './components/pricings/pricings.component';
import { PresentationComponent } from './components/presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    PricingsComponent,
    PresentationComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent, CarouselComponent, PricingsComponent, PresentationComponent]
})
export class AppModule { }
