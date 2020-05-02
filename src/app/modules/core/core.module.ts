// Importing Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Importing our custom modules
// Importing components
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
// Importing services
import { SkinTypeService } from './services/skin-type.service';
import { ScreenResizeService } from './services/screen-resize.service';
import { MembersService } from './services/members.service';
import { SvgDefinitionsComponent } from './components/svg-definitions/svg-definitions.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SvgDefinitionsComponent,
    SvgIconComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SvgDefinitionsComponent,
    SvgIconComponent
  ],
  providers: [
    SkinTypeService,
    ScreenResizeService,
    MembersService
  ]
})
export class CoreModule { }
