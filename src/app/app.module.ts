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
import { ProductsModule } from './modules/products/products.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ContactUsService } from './services/contact-us.service';
import { FindSkinTypeComponent } from './components/find-skin-type/find-skin-type.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { SkinTypeService } from './services/skin-type/skin-type.service';
import { SkinTypeQuizComponent } from './components/skin-type-quiz/skin-type-quiz.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ExploringServicesComponent } from './components/exploring-services/exploring-services.component';
import { ProductsMiniComponent } from './components/products-mini/products-mini.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { MembersService } from './services/members.service';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products', loadChildren: () => import('./modules/products/products.module')
      .then(module => module.ProductsModule)
  }
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
    ServicesComponent,
    ExploringServicesComponent,
    ProductsMiniComponent,
    PricingComponent,
    AboutComponent,
    TeamComponent,
    TestimonialComponent,
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
    RouterModule.forRoot(appRoutes),
    CarouselModule,
    ProductsModule
  ],
  providers: [ContactUsService, SkinTypeService, MembersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
