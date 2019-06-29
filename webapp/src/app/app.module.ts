// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PricingsComponent } from './components/pricings/pricings.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ContactComponent } from './components/contact/contact.component';
import { MapComponent } from './components/map/map.component';
import { TeamComponent } from './components/team/team.component';

// SERVICES
import { ApplicationStateService } from './services/application-state/application-state.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    PricingsComponent,
    PresentationComponent,
    ContactComponent,
    MapComponent,
    TeamComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ ApplicationStateService ],
  bootstrap: [ AppComponent, NavbarComponent, CarouselComponent, PricingsComponent, PresentationComponent, ContactComponent, MapComponent, TeamComponent ]
})
export class AppModule { }
