import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ContactUsService } from './services/contact-us.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ContactUsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
