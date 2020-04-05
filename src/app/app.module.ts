import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ContactUsService } from './services/contact-us.service';
import { FindSkinTypeComponent } from './components/find-skin-type/find-skin-type.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { SkinTypeService } from './services/skin-type/skin-type.service';
import { SkinTypeQuizComponent } from './components/skin-type-quiz/skin-type-quiz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    FindSkinTypeComponent,
    NavbarComponent,
    BannerComponent,
    SkinTypeQuizComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [ContactUsService, SkinTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
