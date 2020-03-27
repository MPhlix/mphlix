import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ContactUsService } from './services/contact-us.service';
import { FindSkinTypeComponent } from './components/find-skin-type/find-skin-type.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    FindSkinTypeComponent,
    NavbarComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [ContactUsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
