import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesListingsComponent } from './components/services-listings/services-listings.component';
import { ServicesExplorationComponent } from './components/services-exploration/services-exploration.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { MphlixTeamComponent } from './components/mphlix-team/mphlix-team.component';
import { MphlixPricesComponent } from './components/mphlix-prices/mphlix-prices.component';
import { MphlixGalleryComponent } from './components/mphlix-gallery/mphlix-gallery.component';
import { MphlixTestimonyComponent } from './components/mphlix-testimony/mphlix-testimony.component';
import { FooterByColorlibComponent } from './components/footer-by-colorlib/footer-by-colorlib.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AboutComponent,
    ServicesListingsComponent,
    ServicesExplorationComponent,
    AppointmentComponent,
    MphlixTeamComponent,
    MphlixPricesComponent,
    MphlixGalleryComponent,
    MphlixTestimonyComponent,
    FooterByColorlibComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
