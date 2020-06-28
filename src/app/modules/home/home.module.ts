// Importing Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material';

// Importing third party modules
import { NgxSpinnerModule } from 'ngx-spinner';
import { CarouselModule } from 'ngx-owl-carousel-o';

// Importing our custom modules
// Importing components
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FindSkinTypeComponent } from './components/find-skin-type/find-skin-type.component';
import { BannerComponent } from './components/banner/banner.component';
import { SkinTypeQuizComponent } from './components/skin-type-quiz/skin-type-quiz.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ExploringServicesComponent } from './components/exploring-services/exploring-services.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { AccoladesComponent } from './components/accolades/accolades.component';
// Importing services
import { AccoladesService } from '../home/services/accolades.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    ContactUsComponent,
    FindSkinTypeComponent,
    BannerComponent,
    SkinTypeQuizComponent,
    HomeComponent,
    ServicesComponent,
    ExploringServicesComponent,
    PricingComponent,
    AboutComponent,
    TeamComponent,
    TestimonialComponent,
    AccoladesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    NgxSpinnerModule,
    CarouselModule,
    RouterModule.forChild(appRoutes),
  ],
  providers: [AccoladesService]
})
export class HomeModule { }
