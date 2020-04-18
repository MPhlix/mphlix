// Importing Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material';

// Importing third party modules
import { NgxSpinnerModule } from 'ngx-spinner';
import { CarouselModule } from 'ngx-owl-carousel-o';

// Importing our custom modules
import { AppComponent } from './app.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ContactUsService } from './services/contact-us.service';
import { FindSkinTypeComponent } from './components/find-skin-type/find-skin-type.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { SkinTypeService } from './services/skin-type/skin-type.service';
import { SkinTypeQuizComponent } from './components/skin-type-quiz/skin-type-quiz.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { MphlixServicesComponent } from './components/mphlix-services/mphlix-services.component';
import { MphlixExploringServicesComponent } from './components/mphlix-exploring-services/mphlix-exploring-services.component';
import { MphlixProductsMiniComponent } from './components/mphlix-products-mini/mphlix-products-mini.component';
import { MphlixPricingComponent } from './components/mphlix-pricing/mphlix-pricing.component';
import { MphlixAboutComponent } from './components/mphlix-about/mphlix-about.component';
import { MphlixTeamComponent } from './components/mphlix-team/mphlix-team.component';
import { MembersService } from './services/members.service';
import { MphlixTestimonialComponent } from './components/mphlix-testimonial/mphlix-testimonial.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    FindSkinTypeComponent,
    NavbarComponent,
    BannerComponent,
    SkinTypeQuizComponent,
    HomeComponent,
    ProductsComponent,
    MphlixServicesComponent,
    MphlixExploringServicesComponent,
    MphlixProductsMiniComponent,
    MphlixPricingComponent,
    MphlixAboutComponent,
    MphlixTeamComponent,
    MphlixTestimonialComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    RouterModule.forRoot(
      appRoutes
    ),
    CarouselModule
  ],
  providers: [ContactUsService, SkinTypeService, MembersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
