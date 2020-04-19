// Importing Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing our custom modules
// Importing components
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
// Importing services
import { SkinTypeService } from './services/skin-type.service';
import { ScreenResizeService } from './services/screen-resize.service';
import { MembersService } from './services/members.service';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent
  ],
  providers: [
    SkinTypeService,
    ScreenResizeService,
    MembersService
  ]
})
export class CoreModule { }
